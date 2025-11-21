
export function IsInteger(value:unknown): boolean {
    return Number.isInteger(value);
}

export function isPositive(value: unknown): boolean {
    return typeof value === "number" && value > 0;
}

export function isArrayOfNumbers(arr: unknown): boolean {
return Array.isArray(arr) && arr.every(n => typeof n === "number")
}


