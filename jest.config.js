module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testRegex: '\\.test\\.(j)s(x)',
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(scss|svg)$': '<rootDir>/__mocks__/empty-module.js'
  },
  collectCoverageFrom: [
    '!jest.config.js',
    '!jest.setup.js',
    '!next.config.js',
    '**/*.{js,jsx}',
    '!coverage/**',
    '!server/**',
    '!lib/with-redux-store.js',
    '!pages/_app.js',
  ]
}
