            //Tipos basicos
let myTypeString: string = 'Hello world!';
let myTypeNumber: number = 23;
let myTypeBoolean: boolean = true;

// myTypeString = "Hola";
// myTypeNumber = 50;
// myTypeBoolean = false;

            //Arreglos
let arrNumber: number[] = [1, 2, 3];
// let arrNumber2: Array<number> = [1, 2, 3];
let arrString: string[] = ["uno", "dos"];

let arrAny: any[] = ['Hola', 1, true];

            //Tuplas
let tuplaPlayer: [string, number, boolean] = ['Hola', 55, false];

            //Tuplas Array
let tuplaPlayers: [number, string][];

tuplaPlayers = [
    [1, 'Brandon'],
    [2, 'Josue'],
    [3, 'Isaac']
];

let variable1;

let variable2: string ='';

let variable3 = '';

let variable4 = 33;

let variable5 = false;

            //Composicion de tipos
//Unions
let var3: string | number | null;
var3 = '';

