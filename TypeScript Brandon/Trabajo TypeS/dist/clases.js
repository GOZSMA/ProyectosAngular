"use strict";
// class Employee {
//     private id: number;
//     private name: string;
//     private dept: string;
//     constructor(id: number, name: string, dept: string) {
//         this.id = id;
//         this.name = name;
//         this.dept = dept;
//         this.showInfo();
//     }
//     private showInfo():void{
//         console.log(`${this.name} ${this.dept}`);
//     }
// }
// const emp = new Employee(1, 'Brandon', 'Ventas');
// ---------------------------------
class Person {
    constructor() {
        this.zone = 'Caribean';
        this.city = 'Santo Domingo';
        this.country = 'R.D';
    }
    greet() {
        console.log('Hola!!!');
    }
}
class Employee extends Person {
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.name} ${this.dept} ${this.city}`);
    }
}
const emp = new Employee(1, 'Brandon', 'Ventas');
