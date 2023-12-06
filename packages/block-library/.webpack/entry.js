const path = require('path');
const fs = require('fs');

const SUFFIXES = ['.ts', '.tsx', '.js', '.jsx'];

function handleIndex(entry, parent, dirent) {
	if (!entry[dirent.name]) {
        for (const suffix of SUFFIXES) {
            const indexPath = path.join(parent, dirent.name, 'index' + suffix);
			if (fs.existsSync(indexPath)) {
                entry[dirent.name] = './src/' + dirent.name + '/index' + suffix;
                return;
            }
        }
    }
}

function handleView(entry, parent, dirent) {
    const name = dirent.name + '-view';
    if (!entry[name]) {
        for (const suffix of SUFFIXES) {
            const viewPath = path.join(parent, dirent.name, 'view' + suffix);
            if (fs.existsSync(viewPath)) {
                entry[name] = './src/' + dirent.name + '/' + 'view' + suffix;
                return;
            }
        }
    }
}


const SRC = path.join(path.dirname(__dirname), 'src');

module.exports = function () {
    const entry = {};

    const dirs = fs.readdirSync(SRC, {withFileTypes: true});
    for (const dirent of dirs) {
        if (dirent.isDirectory() && !dirent.name.startsWith('.') && !dirent.name.startsWith('_')) {
            handleIndex(entry, SRC, dirent);
            handleView(entry, SRC, dirent);
        }
    }
    return entry;
}
