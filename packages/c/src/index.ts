import { callFromB } from "b";

export function callFromC() {
  return 4;
}

export function internalCallBFromC() {
    return callFromB() + callFromC();
}
