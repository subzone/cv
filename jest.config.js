module.exports = {
    setupFilesAfterEnv: ["./src/setupTests.js"],
    reporters: ["default", "jest-junit"],
    coverageReporters: ['text', 'lcov', 'cobertura', 'jest-junit']
  }