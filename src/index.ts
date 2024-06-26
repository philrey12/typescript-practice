// Built-In Types
let sales: number = 123_456_789; // OR let sales = 123_456_789;
let course: string = 'TypeScript'; // OR let course = 'TypeScript';
let is_published: boolean = true; // OR let is_published = true;
let level: any; // OR let level;

console.log('Sales: ' + sales);
console.log('Course: ' + course);
console.log('Is Published: ' + is_published);
console.log('Level: ' + level); // undefined

// -----------------------------------------------------------

// Arrays
let numbers: number[] = [1, 2, 3];

numbers.forEach(n => {
    console.log(n);
});

// -----------------------------------------------------------

// Tuples
let user1: [number, string] = [1001, 'Philip']; // correct
// let user2: [number, string] = [1001, 'Philip', true]; // incorrect

console.log('ID: ' + user1[0]);
console.log('Name: ' + user1[1]);

// -----------------------------------------------------------

// Enums
enum SizeA { Small = 1, Medium = 2, Large = 3 }
let mySizeA: SizeA = SizeA.Medium;

console.log('Size: ' + mySizeA);

const enum SizeB { Small = 1, Medium = 2, Large = 3 } // optimized compiled js code
let mySizeB: SizeB = SizeB.Large;

console.log('Size: ' + mySizeB);

// -----------------------------------------------------------

// Functions
function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
};

calculateTax(10_000);

// -----------------------------------------------------------

// Objects
let employeeSample1: {
    readonly id: number, // 'readonly' prevents modification of value
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Philip',
    retire: (date: Date) => {
        console.log(date);
    }
}

// -----------------------------------------------------------

// Type Aliases
type Employee = {
    readonly id: number, // 'readonly' prevents modification of value
    name: string,
    retire: (date: Date) => void
}

let employeeSample2: Employee = {
    id: 1,
    name: 'Philip',
    retire: (date: Date) => {
        console.log(date);
    }
}

// -----------------------------------------------------------

// Union Types
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');

// -----------------------------------------------------------

// Intersection Types
type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// -----------------------------------------------------------

// Literal Types (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// -----------------------------------------------------------

// Nullable Types
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log('Hola!');
    }
}

greet(undefined);

// -----------------------------------------------------------

// Optional Chaining
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// Optional property access operator using '?.'
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call operator
// let log: any = null;
// log?.('a');
