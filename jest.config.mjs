export default {
  testEnvironment: "node",

  testMatch: [
    "**/tests/**/*.test.mjs",
    "**/tests/**/*.test.js"
  ],

  setupFilesAfterEnv: [
    "<rootDir>/tests/config/loadEnv.js",
    "<rootDir>/tests/config/testSetup.js"
  ],

  transform: {},

  verbose: true
};
