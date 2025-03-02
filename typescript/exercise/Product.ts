// class Product {
//     id: number;
//     name: string;

//     constructor(id,name) {
//         this.id = id;
//         this.name = name;   // şeklinde yapmak yerine
//     }
// }

export class Product {

    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public price?: number,
    ) {
    }
}