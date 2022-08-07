import { callFromA } from "a";
import { callFromA as aliasCallFromA } from "@ts_workspace/a";
import { callFromB } from "b";

export function callFromSrc() {
    return {
        src: 1,
        a: callFromA(),
        alias_a: aliasCallFromA(),
        b: callFromB()
    }
}
