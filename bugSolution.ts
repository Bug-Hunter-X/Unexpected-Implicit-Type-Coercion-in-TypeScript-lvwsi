function printString(str: string): void {
  if (typeof str !== 'string') {
    throw new Error('Invalid input: Expected a string');
  }
  console.log(str);
}

function printNumber(num: number): void {
  console.log(num);
}

printString(123); // This will now throw an error at runtime
printNumber(123); // This is correct