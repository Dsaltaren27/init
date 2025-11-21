import { IsInteger, isPositive, isArrayOfNumbers } from "../src/validator";

test("Entero es falso para string", () => {
  expect(IsInteger("123")).toBe(false);
});

test("Es falso si el numero es negativo", () => {
  expect(isPositive(-10)).toBe(false);
});


test("Falso para valores que no son numericos", () => {
  expect(isArrayOfNumbers("hola")).toBe(false);
  expect(isArrayOfNumbers(123)).toBe(false);
  expect(isArrayOfNumbers({ a: 1 })).toBe(false);
});