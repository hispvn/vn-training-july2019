// class example

class Person1 {
	private _name: string;
	private age: Date;

	constructor(name: string, age: Date) {
		this._name = name;
		this.age = age;
	}

	get name(): string {
		return this._name;
	}
}

const p1 = new Person1("Morten", new Date("1981-03-20"));
console.log(p1.name);

// class example + constructor with var initialization

class Person2 {
	constructor(private name: string, private age: Date) {}
}

const p2 = new Person2("Morten", new Date("1981-03-20"));
console.log(p2);

// class static method example + default method values

class Calculator {
	/**
	 * Calculates the value to the power of exponent, defaults to squared (2).
	 *
	 * @param x Base value of expression
	 * @param y Exponent value of expression
	 */
	static pow(x: number = 0, y: number = 2): number {
		return Math.pow(x, y);
	}
}

console.log(Calculator.pow(4));

// readonly example

class Person3 {
	public readonly name: string;
	constructor(name: string) {
		this.name = name;
	}
}

const p3 = new Person3("Morten");
console.log(p3);

// getter setter example

class Person4 {
	constructor(private _name: string) {}

	get name() {
		return this._name;
	}

	set name(newName: string) {
		if (newName == null || newName.length === 0) {
			throw new Error("Name must be non-null and can not be empty.");
		}

		this._name = newName;
	}
}

const p4 = new Person4("Morten");

try {
	p4.name = "";
} catch (err) {
	console.log(err.message);
}

// abstract + protected vars example

abstract class PartialPerson {
	constructor(protected name: string) {}
	abstract sayHi(): void;
}

class Person5 extends PartialPerson {
	constructor(protected name: string) {
		super(name);
	}

	sayHi() {
		console.log(this.name);
	}
}

new Person5("Morten").sayHi();
