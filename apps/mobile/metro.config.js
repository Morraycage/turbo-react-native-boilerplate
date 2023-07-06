const path = require('path');
const {makeMetroConfig} = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');

const extraNodeModules = {
  modules: path.resolve(path.join(__dirname, '../../node_modules')),
};

const watchFolders = [path.resolve(path.join(__dirname, '../../node_modules'))];

const nodeModulesPaths = [path.resolve(path.join(__dirname, './node_modules'))];

module.exports = makeMetroConfig({
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
    extraNodeModules,
    nodeModulesPaths,
  },
  watchFolders,
});
