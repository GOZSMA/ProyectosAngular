"use strict";
//FUNCIONES
function greet(name = 'Nombre') {
    console.log(`Hello., ${name.toUpperCase()} !!`);
}
greet('Brandon');
greet();
// --------------------------------
// function greet (){
//     console.log('HOLA!');
// }
// greet();
// ---------------------------------
// function getNumnber(){
//     return Math.floor(Math.random() * 100);
// }
// function getNumnber(): number{
//     return Math.floor(Math.random() * 100);
// }
// console.log(getNumnber());
// ---------------------------------
// function printPosition(position: {lat: number, long: number}) {
//     console.log(`Latitude & Longitude are: LAT ${position.lat} LONG ${position.long}`)
// }
// printPosition({lat: 3, long: 55});
// function printPosition(position: {lat: number, long: number | string}) {
//     console.log(`Latitude & Longitude are: LAT ${position.lat} LONG ${position.long}`)
// }
// printPosition({lat: 3, long: 'Chorrocientosmil'});
// ---------------------------------
