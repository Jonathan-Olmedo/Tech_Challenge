beforeEach(() => {
  jest.resetModules();
});

test("Arreglo anidado 1", () => {
  const { arrayIntegers } = require("./index");
  const result = arrayIntegers([1, [2, [3, [4, 5]]]]);
  expect(result).toStrictEqual([1,2,3,4,5]);
});
test("Arreglo anidado ", () => {
  const { arrayIntegers } = require("./index");
  const result1 = arrayIntegers([1, [2, [7,8], [3, [4, 5]], [4], [10, [13,15]]]]);
  expect(result1).toStrictEqual([1,2,3,4,5,7,8,10,13,15]);
});
test("Arreglo no debe contener strings", () => {
  const { arrayIntegers } = require("./index");
  expect(() => arrayIntegers(["one", "two", "three"])).toThrow(Error);
});
test("Arreglo vacio", () => {
  const { arrayIntegers } = require("./index");
  expect(() => arrayIntegers([])).toThrow(Error);
});
test("No es un array", () => {
  const { arrayIntegers } = require("./index");
  expect(() => arrayIntegers(45)).toThrow(Error);
});
test("Arreglo con elementos nulos", () => {
  const { arrayIntegers } = require("./index");
  expect(() => arrayIntegers([["Hola"], null])).toThrow(Error);
});
test("Arreglo de numeros y strings", () => {
  const { arrayIntegers } = require("./index");
  expect(() => arrayIntegers([["Hola"], [5.7, 9.8, [3.4]]])).toThrow(Error);
});
test("Arreglo de numeros no enteros", () => {
  const { arrayIntegers } = require("./index");
  expect(() => arrayIntegers([1.5, 0.15, [5.7, 9.8, [3.4]]])).toThrow(Error);
});
test("funcion sin argumento", () => {
  const { arrayIntegers } = require("./index");
  expect(() => arrayIntegers()).toThrow(Error);
});
