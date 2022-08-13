import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
    displayName: "package_c",
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    // globalSetup: "./test/setup.ts",
    // globalTeardown: "./test/teardown.ts",
};
export default config;
