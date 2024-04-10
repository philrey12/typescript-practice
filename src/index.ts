// Built-In Types
let sales: number = 123_456_789; // OR let sales = 123_456_789;
let course: string = 'TypeScript'; // OR let course = 'TypeScript';
let is_published: boolean = true; // OR let is_published = true;
let level: any; // OR let level;

console.log('Sales: ' + sales);
console.log('Course: ' + course);
console.log('Is Published: ' + is_published);
console.log('Level: ' + level);

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

console.log('ID: ' + user1[0].valueOf);
console.log('Name: ' + user1[1].valueOf);