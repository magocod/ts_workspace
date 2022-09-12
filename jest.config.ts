import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  // globalSetup: "./test/setup.ts",
  // globalTeardown: "./test/teardown.ts",
  testPathIgnorePatterns: ["./packages"],
  projects: [
    "<rootDir>/apps/app_a",
    "<rootDir>/apps/app_b",
    "<rootDir>/apps/app_c",
    "<rootDir>/packages/a",
    "<rootDir>/packages/b",
    "<rootDir>/packages/c",
  ],
};
export default config;
