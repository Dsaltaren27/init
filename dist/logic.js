"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumArray = SumArray;
exports.Average = Average;
exports.MaxNumber = MaxNumber;
function SumArray(num) {
    return num.reduce((a, b) => a + b, 0);
}
function Average(num) {
    if (num.length === 0)
        return 0;
    return SumArray(num) / num.length;
}
function MaxNumber(num) {
    return Math.max(...num);
}
