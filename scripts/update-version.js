const readline = require('readline');
const path = require('path');
const fs = require('fs');
const childProcess = require("child_process");

function shell(cmd) {
    return childProcess.execSync(cmd).toString();
}

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    return new Promise(resolve => rl.question(query, (answer) => {
        rl.close()
        resolve(answer)
    }))
}

function updatePHP(filepath, version) {
    let php = fs.readFileSync(filepath, 'utf-8')
    php = php.replace(/Version:\s+[\w|.]+/, `Version:           ${version}`)
    fs.writeFileSync(filepath, php)
}

function updateReadmeTxt(filepath, version) {
    let php = fs.readFileSync(filepath, 'utf-8')
    php = php.replace(/Stable tag:\s+[\w|.]+/, `Stable tag: ${version}`)
    fs.writeFileSync(filepath, php)
}

function updateFile(filepath, version) {
    const json = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    json['version'] = version
    fs.writeFileSync(filepath, JSON.stringify(json, null, 4))
}

function updateVersion(dirpath, version) {
    try {
        const files = fs.readdirSync(dirpath)
        for (const file of files) {
            const filepath = path.join(dirpath, file)
            if (file === 'block.json') {
                updateFile(filepath, version)
            }
            if (!file.startsWith('.') && !file.startsWith('_') && file !== 'build' && fs.lstatSync(filepath).isDirectory(filepath)) {
                updateVersion(filepath, version)
            }
        }
    } catch (err) {
        console.error(err)
    }
}

(async () => {
    const version = await askQuestion("Enter version number (without 'v'): ");
    if (!version) {
        return;
    }

    const topdir = path.dirname(__dirname);

    updateReadmeTxt(path.join(topdir, 'readme.txt'), version);
    updatePHP(path.join(topdir, 'blocks.php'), version);

    const packages = path.join(topdir, 'packages');
    updateVersion(packages, version);

    const wpx = path.join(packages, 'wpx', 'package.json');
    updateFile(wpx, version);



    updateFile(path.join(path.dirname(__dirname), 'package.json'), version);

    console.log('Next steps: ');
    console.log(' * Update readme.txt with changelog.');
    console.log(` * Commit with the message v${version}.`);
    console.log(` * Tag that commit as v${version}.`);
    console.log(` * Build the release and publish to GitHub with the changes.`);
    console.log();

    console.log(shell('git log --color=always $(git describe --tags --abbrev=0)..HEAD --oneline'));
})()
