function add(a: number, b: number): number {
  return a + b;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

console.log(printResult(add(5, 12))); // undefined
