const assert = require("assert");

const Sso = require("./dist");

const result = Sso.getSignIn("nobull.com");
//assert.deepStrictEqual(result, ["foo", "bar", "bam"].sort());
assert.deepStrictEqual(result, ["https://www.account.finsweet.com/fish"]);