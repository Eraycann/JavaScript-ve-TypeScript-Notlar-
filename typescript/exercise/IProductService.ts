import { Product } from "./Product";

export interface IProductService {
    getById(id: number): Product;
    getProducts(): Array<Product>;  // getProducts(): Product[] --> ikiside aynıdır.
    saveProduct(prodyct: Product): void;
    deleteProduct(product: Product): void;
}

// IProductService'deki interface yapısı ProductService'deki class yapısına implemente edilip içleri doldurulacak.