"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPangram = void 0;
var isPangram = function (phrase) {
    var word = phrase.trim().
        toLowerCase().
        split('').
        filter(function (b) { return b != b.toUpperCase(); });
    var letters = { 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0 };
    word.map(function (a) {
        var key = a;
        if (letters.hasOwnProperty(key)) {
            letters[key] += 1;
        }
    });
    console.log(word);
    for (var _i = 0, _a = Object.entries(letters); _i < _a.length; _i++) {
        var b = _a[_i];
        if (b[1] < 1)
            return false;
    }
    return true;
};
exports.isPangram = isPangram;
console.log((0, exports.isPangram)("hello gad"));
