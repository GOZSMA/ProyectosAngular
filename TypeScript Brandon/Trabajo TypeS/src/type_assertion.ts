            //Type Assertion
let channel: any = 'Brandon';

// let channelSTR = <string>channel;

let channelSTR = channel as string;

// const myCanvas = document.getElementById('main') as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById('main');

