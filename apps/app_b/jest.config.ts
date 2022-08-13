import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  displayName: "app_b",
  verbose: false,
  preset: "ts-jest",
  testEnvironment: "node",
};
export default config;
