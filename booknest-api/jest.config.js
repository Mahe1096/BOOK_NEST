module.exports = {
  testEnvironment: 'node', // Good for backend APIs
  setupFilesAfterEnv: ['../booknest-api/tests/jest.setup.js'], // Runs this file before each test
  testMatch: ['**/tests/**/*.test.js'], // Test file pattern
  moduleFileExtensions: ['js', 'json'], // Extensions to process
  coveragePathIgnorePatterns: ['/node_modules/'], // Skip coverage on dependencies
  verbose: true // Show detailed test info
};