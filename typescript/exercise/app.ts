import { Product } from './Product';
import { ProductService } from './ProductService';

let _productService = new ProductService();

let result;

result = _productService.getById(2);

let p = new Product();
p.name = "Iphone 6";
p.price = 4000;
p.category = "Telefon";

_productService.saveProduct(p);
// _productService.deleteProduct(result);  // yukarıda aldığımız id'si 2 olan ürünü silicez.
result = _productService.getProducts();

console.log(result);

// tsc app.ts   dediğimizde burdaki herbir ts dosyasının js karşılığı derlenecektir.
// node app.js ile de node.js ortamında çalıştırılacaktır.