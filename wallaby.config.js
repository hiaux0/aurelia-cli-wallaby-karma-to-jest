process.env.NODE_ENV = 'test';

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'src/**/*.html',
      'test/**/*.js',
      '!test/unit/**/*.spec.js',
      '!src/**/*.spec.js',
    ],

    tests: [
      'test/unit/**/*.spec.js',
      'src/**/*.spec.js',
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        'plugins': [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
        'presets': ['@babel/preset-env']
      })
    },
    debug: true,
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest'
  };
};
