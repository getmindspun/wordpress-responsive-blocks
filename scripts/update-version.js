const readline = require('readline')
const path = require('path')
const fs = require('fs')

function askQuestion (query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    return new Promise(resolve => rl.question(query, (answer) => {
        rl.close()
        resolve(answer)
    }))
}

function updatePHP (filepath, version) {
    let php = fs.readFileSync(filepath, 'utf-8')
    php = php.replace(/Version:\s+[\w|.]+/, `Version:           ${version}`)
    fs.writeFileSync(filepath, php)
}

function updateFile (filepath, version) {
    const json = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    json['version'] = version
    fs.writeFileSync(filepath, JSON.stringify(json, null, 4))
}

function updateVersion (dirpath, version) {
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
    const version = await askQuestion('Enter version number: ')
    if (!version) {
        return
    }

    const topdir = path.dirname(__dirname)

    updatePHP(path.join(topdir, 'blocks.php'), version);

    const packages = path.join(topdir, 'packages')
    updateVersion(packages, version)

    const wpx = path.join(packages, 'wpx', 'package.json')
    updateFile(wpx, version)

    updateFile(path.join(path.dirname(__dirname), 'package.json'), version)
})()
