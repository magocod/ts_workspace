import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  displayName: "app_a",
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node"
};
export default config;
