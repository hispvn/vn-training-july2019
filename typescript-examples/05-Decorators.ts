//-----------------------------------------------------------------------------
// simple property change logger example
//-----------------------------------------------------------------------------

function Log() {
	return function(target: Object, key: string | symbol) {
		let val = (<any>target)[key];

		const getter = () => {
			return val;
		};

		const setter = (next: any) => {
			console.log(`${String(key)}: old value ${val}, next value ${next}`);
			val = next;
		};

		Object.defineProperty(target, key, {
			get: getter,
			set: setter,
			enumerable: true,
			configurable: true
		});
	};
}

class Point {
	@Log()
	public x: number = 0;

	@Log()
	public y: number = 0;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

const p = new Point(10, 20);
p.x = 30;
p.y = 50;

//-----------------------------------------------------------------------------
// simple interceptor example
//-----------------------------------------------------------------------------

function Intercept() {
	return function(
		target: Object,
		key: string | symbol,
		descriptor: PropertyDescriptor
	): PropertyDescriptor {
		const original = descriptor.value;

		descriptor.value = function(...args: any[]) {
			console.log(`Before ${new String(key)}`);
			const result = original.apply(this, args);
			console.log(`After ${new String(key)}`);
			return result;
		};

		return descriptor;
	};
}

class SomeClass {
	@Intercept()
	static callMe() {
		console.log("callMe");
	}
}

SomeClass.callMe();

//-----------------------------------------------------------------------------
// access arguments example
//-----------------------------------------------------------------------------

function LogArgs() {
	return function(
		target: Object,
		key: string | Symbol,
		descriptor: PropertyDescriptor
	): PropertyDescriptor {
		const original = descriptor.value;

		descriptor.value = function(...args: any[]) {
			console.log("The method args are: " + JSON.stringify(args));
			const result = original.apply(this, args);
			console.log("The return value is: " + result);
			return result;
		};

		return descriptor;
	};
}

class SomeClass2 {
	@LogArgs()
	printSomething(a: number, b: string, c: boolean): number {
		return Math.PI;
	}
}

new SomeClass2().printSomething(10, "hello", false);
