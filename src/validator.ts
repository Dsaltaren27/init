
export function IsInteger(value:any): boolean {
    return Number.isInteger(value);
}

export function isPositive(value:any): boolean {
    return value > 0;
}

export function isArrayOfNumbers(arr: any): boolean {
return Array.isArray(arr) && arr.every(n => typeof n === "number")
}


