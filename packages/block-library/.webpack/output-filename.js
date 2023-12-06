const VIEW_SUFFIX = '-view';

module.exports = function(pathData) {
    if (pathData.chunk.name.endsWith(VIEW_SUFFIX)) {
        const name = pathData.chunk.name.substring(0, pathData.chunk.name.length - VIEW_SUFFIX.length);
        return name + '/view.js';
    }
    return '[name]/index.js';
}
