module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  globals: {
    'ts-jest': {
      'useBabelrc': true
    }
  },  
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testRegex: '\\.test\\.(t|j)s(x)',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(scss|svg)$': '<rootDir>/__mocks__/empty-module.js'
  },
  collectCoverageFrom: [
    '!jest.config.js',
    '!jest.setup.js',
    '!next.config.js',
    '**/*.{js,jsx,ts,tsx}',
    '!coverage/**',
    '!production-server/**'
  ]
}
