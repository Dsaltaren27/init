"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsInteger = IsInteger;
exports.isPositive = isPositive;
exports.isArrayOfNumbers = isArrayOfNumbers;
function IsInteger(value) {
    return Number.isInteger(value);
}
function isPositive(value) {
    return typeof value === "number" && value > 0;
}
function isArrayOfNumbers(arr) {
    return Array.isArray(arr) && arr.every(n => typeof n === "number");
}
