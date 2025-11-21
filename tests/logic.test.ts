import { Average, MaxNumber, SumArray } from "../src/logic";

test("El array es 0 si esta vacio", () => {
  expect(SumArray([])).toBe(0);
});

test("lanza error si número es inválido", () => {
  
});

test("Se calculan tanto numeros negativos como positivos", () => {
  expect(Average([10, -5, 5])).toBe(10 / 3); 
});

test("maxNumber debe retornar el único elemento del array", () => {
  expect(MaxNumber([7])).toBe(7);
});
