//-----------------------------------------------------------------------------
// basic example
//-----------------------------------------------------------------------------

const hello: string = "Hello, World!";
console.log(hello);

function add(a: number, b: number): number {
  return a + b;
}

let result: number = add(1, 2);
console.log(result);

//-----------------------------------------------------------------------------
// tuple example
//-----------------------------------------------------------------------------

let my: [number, string, number] = [123, "hello", 123];

//-----------------------------------------------------------------------------
// enum example
//-----------------------------------------------------------------------------

enum Colors1 {
  RED = 1,
  GREEN,
  BLUE,
}

console.log(Colors1);

enum Colors2 {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}

console.log(Colors2);
