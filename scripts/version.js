const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const assert = require('assert');

const home = path.dirname(__dirname);

function shell(cmd) {
    return childProcess.execSync(cmd).toString();
}

function git_branch() {
    return shell('git rev-parse --abbrev-ref HEAD').trim();
}


function git_short_hash() {
    return shell('git rev-parse --short HEAD');
}


function git_dirty() {
    const cmd = 'git diff --quiet'
    try {
        childProcess.execSync(cmd);
    }
    catch (error) {
        return true;
    }

    return false;
}


function plugin_version() {
    const pluginPath = path.join(home, 'blocks.php');
    const text = fs.readFileSync(pluginPath).toString();

    const match = text.match(/Version:\s+v?(\d+\.\d+\.\d+)/);
    assert(match);
    return match[1];
}


function commit_from_tag(tag) {
    return shell('git rev-list -n 1 ' + tag);
}


function number_commits_since_tag(tag) {
    const cmd = `git rev-list ${tag}.. --count`;
    return parseInt(shell(cmd));
}


function branch_version(branch) {
    const dirty = git_dirty() ? '-dirty' : '';
    return plugin_version() + '-' + branch + '-' + git_short_hash() + dirty;
}


function main_version() {
    let version = plugin_version()
    const tag = 'v' + version
    const dirty = git_dirty() ? '-dirty' : '';

    try {
        const count = number_commits_since_tag(tag)
        if (count > 0) {
            version += '-' + count;
        }
    } catch (_) {
        version = 'dev';
    }

    return version + dirty;
}

const branch = git_branch()
if (branch !== 'main') {
    console.log(branch_version(branch));
} else {
    console.log(main_version());
}
