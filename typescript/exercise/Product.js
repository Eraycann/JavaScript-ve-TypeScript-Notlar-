"use strict";
// class Product {
//     id: number;
//     name: string;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
//     constructor(id,name) {
//         this.id = id;
//         this.name = name;   // şeklinde yapmak yerine
//     }
// }
var Product = /** @class */ (function () {
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
