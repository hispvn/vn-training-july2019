// basic generics example

function identity1(x: any): any {
	return x;
}

// identity1({a: 123}).??

function identity2<T>(x: T): T {
	return x;
}

console.log(identity2(123));
console.log(identity2("Hello"));

identity2({ a: 123 }).a;

// generic non compatible types example

interface Point {
	x: number;
	y: number;
}

interface Complex {
	re: number;
	im: number;
}

type StupidType = Point | Complex;

function identity3<T extends StupidType>(x: T): T {
	return x;
}

identity3({ x: 1, y: 2 }).x;
identity3({ re: 1, im: 2 }).im;

// generic extends common props example

class IdObject {
	constructor(public id: number) {}
}

class DataElement extends IdObject {
	constructor(public id: number) {
		super(id);
	}
}

class OrganisationUnit {
	constructor(public id: number) {}
}

function printIdObject<T extends IdObject>(x: T) {
	console.log(x.id);
}

const id1 = new DataElement(123);
const id2 = new OrganisationUnit(321);

printIdObject(id2);

// generic keyof example

function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
