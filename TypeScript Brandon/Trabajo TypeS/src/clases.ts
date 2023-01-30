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
    
    public zone = 'Caribean'
    protected city = 'Santo Domingo';
    private country = 'R.D'
    
    constructor(){}

    greet(): void{
        console.log('Hola!!!');
    }
}


class Employee extends Person {
    constructor(private readonly id: number,private name: string,private dept: string) {
        super();
        this.showInfo();
    }

    private showInfo(): void{
        console.log(`${this.name} ${this.dept} ${this.city}`);
    }
}

const emp = new Employee(1, 'Brandon', 'Ventas');