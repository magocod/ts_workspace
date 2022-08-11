// import { GlobalConfig } from "@jest/types/build/Config";
import { ProjectConfigTsJest } from "ts-jest";

export default async function teardown(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  globalConfig: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectConfig: ProjectConfigTsJest
) {
  // console.log(globalConfig.testPathPattern);
  // console.log(projectConfig.cache);

  // await globalThis.__MONGOD__.stop();
  console.log("global teardown");
}
