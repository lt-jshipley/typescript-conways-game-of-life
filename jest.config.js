const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,

  // this enables us to use tsconfig-paths with jest
  modulePaths: [ compilerOptions.baseUrl ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};