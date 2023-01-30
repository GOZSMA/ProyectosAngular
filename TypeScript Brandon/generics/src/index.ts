// console.log('oliwis');

//Generics
interface Person {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Employee extends Person {
    role:string;
}

interface Data<T>{
    addItem(newItem: T): void;
}

// type dataType = Person | Product;

class DataCollection<T extends {id:number, name: string}> implements Data<T> {
    private items: T[] = [];

    addItem(newItem: T): void{
        this.items.push(newItem);
    }

    getItems(): void{
        console.log(`List of items`, JSON.stringify(this.items));
    }

    getNames(): string[]{
        return this.items.map((item) => item.name);
    }

    getItemById(id: number): T | undefined {
        return this.items.find((item: T) => item.id === id)
    }
}

// const personCollection = new DataCollection ();
// const newData = {
//     id: 1,
//     name: 'Brandon'
// }

// personCollection.addItem(newData);

const productCollection = new DataCollection<Product>();
const newData2 = {
    id: 2,
    name: 'chesco',
    price: 350
}

productCollection.addItem(newData2);

productCollection.getItems();