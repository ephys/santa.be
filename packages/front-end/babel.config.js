'use strict';

/* eslint-disable import/no-commonjs */

module.exports = {
  presets: [
    ['@reworkjs/core/babel-preset', {
      '@babel/preset-env': {

        // jest does not support ES Modules, we need to transpile them to
        // commonjs when in a test environment
        modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
      },
      'babel-plugin-react-intl-auto': {
        removePrefix: 'src/',
      },
    }],
    ['@babel/preset-typescript', {
      isTSX: true,
      allExtensions: true,
    }],
  ],
  plugins: [
    // This plugin is here instead of in @reworkjs because it is otherwise ignored by extract-intl
    // Fix the crash during the translation message extraction
    ['babel-plugin-react-intl-auto', {
      removePrefix: 'src/',
    }],
  ],
};
