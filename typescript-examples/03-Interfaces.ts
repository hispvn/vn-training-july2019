//-----------------------------------------------------------------------------
// basic interface example
//-----------------------------------------------------------------------------

interface Person {
	name: string;
}

class Student {
	constructor(public name: string, public age: number) {}
}

function print(p: Person) {
	if (p instanceof Student) {
		console.log(p.name + ", " + p.age);
	} else {
		console.log(p.name);
	}
}

const student = new Student("Morten", 38);
const studentAsPerson: Person = student;

print(student);
print(studentAsPerson);

//-----------------------------------------------------------------------------
// interface with optional example
//-----------------------------------------------------------------------------

interface Point {
	x: number;
	y: number;
	z?: number;
}

class Point2D implements Point {
	constructor(public x: number, public y: number) {}
}

class Point3D implements Point {
	constructor(public x: number, public y: number, public z: number) {}
}

const point2 = new Point2D(10, 20);
const point3 = new Point3D(10, 20, 30);

printPoint1(point2);
printPoint1(point3);

function printPoint1(p: Point) {
	if (p instanceof Point2D) {
		return console.log(p.x, p.y);
	}

	console.log(p.x, p.y, p.z);
}

function printPoint2(p: Point2D | Point3D) {
	if (p instanceof Point2D) {
		return console.log(p.x, p.y);
	}

	console.log(p.x, p.y, p.z);
}

type AnyPoint = Point2D | Point3D;

function printPoint3(p: AnyPoint) {
	if (p instanceof Point2D) {
		return console.log(p.x, p.y);
	}

	console.log(p.x, p.y, p.z);
}

//-----------------------------------------------------------------------------
// interface with readonly example
//-----------------------------------------------------------------------------

interface FixedPerson {
	readonly name: string;
}

class Person6 implements FixedPerson {
	constructor(public name: string) {}
}

const p6 = new Person6("Morten");
p6.name = "hello";

const p7 = new Person6("Morten") as FixedPerson;
// p6.name = "hello"

//-----------------------------------------------------------------------------
// interface function type example
//-----------------------------------------------------------------------------

interface PersonCallback {
	(p: Person): void;
}

const printPerson: PersonCallback = (p: Person) => {
	console.log(p);
};

printPerson({ name: "Hello" });

//-----------------------------------------------------------------------------
// interface to describe objects literals
//-----------------------------------------------------------------------------

interface IdObject {
	id: number;
}

interface OrganitionUnit extends IdObject {
	name?: string;
}

interface DataElement extends IdObject {
	name?: string;
}

interface DataValue {
	value: string | number | boolean;
	ou: OrganitionUnit;
	de: DataElement;
}

const dv: DataValue = {
	value: 20,
	ou: { id: 123 },
	de: { id: 321 }
};
