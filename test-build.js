const assert = require("assert");
//const Able = require("./dist");
const Sso = require("./dist");

// const definition = { foo: ["bar"] };
// const abilities = ["foo", "bam"];
//const result = Able.flatten(definition, abilities).sort();
const result = Sso.getSignIn("fish");
//assert.deepStrictEqual(result, ["foo", "bar", "bam"].sort());
assert.deepStrictEqual(result, ["https://www.account.finsweet.com/fish"]);