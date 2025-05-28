var concat = function (a, b, c) {
    if (c === void 0) { c = 'cat'; }
    return a + b + c;
};
console.log(concat("a", "b", "c")); // "abc"
console.log(concat("a", "b"));
