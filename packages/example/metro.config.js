const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const root = path.resolve(__dirname, '../../');

const config = {
  watchFolders: [
    path.resolve(root, 'node_modules'),
    path.resolve(root, 'packages/core'),
  ],

  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (_, name) => {
          // Map @core/* to packages/core/src/*
          if (name.startsWith('@core')) {
            const subPath = name.replace('@core', '');
            return path.join(root, 'packages/core/src', subPath);
          }
          return path.join(root, 'node_modules', name);
        },
      }
    ),
  },
};
  
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
