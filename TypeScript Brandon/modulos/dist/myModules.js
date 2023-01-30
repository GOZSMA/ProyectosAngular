"use strict";
// //variable
// export const PI = 3.14;
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandonNumber = exports.PI = void 0;
// //interface
// export interface Person {
//     id: number;
//     name: string;
// }
// // function
// export function generateRandonNumber(): number{
//     return Math.floor(Math.random() * 100);
// }
//variable
const PI = 3.14;
exports.PI = PI;
// function
function generateRandonNumber() {
    return Math.floor(Math.random() * 100);
}
exports.generateRandonNumber = generateRandonNumber;
