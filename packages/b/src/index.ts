import * as uuid from "uuid";

export function callFromB(): number {
  return 3;
}

export function callUUUI(): string {
  return uuid.v4();
}

export * as utils from "./utils";
