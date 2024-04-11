"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
console.log('Sales: ' + sales);
console.log('Course: ' + course);
console.log('Is Published: ' + is_published);
console.log('Level: ' + level);
let numbers = [1, 2, 3];
numbers.forEach(n => {
    console.log(n);
});
let user1 = [1001, 'Philip'];
console.log('ID: ' + user1[0]);
console.log('Name: ' + user1[1]);
var SizeA;
(function (SizeA) {
    SizeA[SizeA["Small"] = 1] = "Small";
    SizeA[SizeA["Medium"] = 2] = "Medium";
    SizeA[SizeA["Large"] = 3] = "Large";
})(SizeA || (SizeA = {}));
let mySizeA = SizeA.Medium;
console.log('Size: ' + mySizeA);
let mySizeB = 3;
console.log('Size: ' + mySizeB);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
;
calculateTax(10000);
let employeeSample1 = {
    id: 1,
    name: 'Philip',
    retire: (date) => {
        console.log(date);
    }
};
let employeeSample2 = {
    id: 1,
    name: 'Philip',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
//# sourceMappingURL=index.js.map