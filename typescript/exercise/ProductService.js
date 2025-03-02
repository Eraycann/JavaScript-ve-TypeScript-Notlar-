"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; // [0]dememiş olsak, bu kritere ait olan geriye 3 ürün dönmek isteyecek
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product); // ve böylece products dizisine bu product'u da ekleriz.
        }
        else { // eğer id'si varsa
            // let index = this.products.indexOf(product); // ilgili product'ın indexini alır
            //     // Gönderdiğimiz object'i değiştirdiğimizden dolayı, bu şekilde bir index numarasıyla bu bilgili burdan alamayız. Onun yerine:
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) { // products dizisindeki herbir ürün dolaşılacak
                if (this.products[i].id == product.id) { // o anki product id'si ile metoda gönderdiğimiz product'ın id'si birbirine eşit ise
                    index = i; // demekki bizim aradığımız ürün, i numaralı indexteki ürünmüş
                }
            }
            this.products.splice(index, 1, product); // products dizisinde, index rakamlı indexine 1 eleman olcak şekilde product'ı ekler.
            // örneğin 2 numaralı indexte olan bir ürün için, sonraki elemana gidicez(1), o indexten sonra gelen ilk elemanın yerine, product'ı eklemiş olcaz.
            // yani verilen indexten itibaren bir ürün siler ve yerine product'ı ekler.
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1); // verilen indexten itibaren 1 elemanı siliyor. (o product'ı liste üzerinden silmiş olucaz.)
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
/*
    hızlı implamente edilince, interface içindeki metot imzaları, classta gövdeye sahip metot haline geldi.
    Neden IProductService içinde bir metot imzası tanımlayıp bunu ProductService içinde kullandım ??
    ProductService MSSQL veya Oracle üzerinde çalışan bir database olabilir.
    Ve ProductService Oracle üzerinde çalışıyorsa, metot gövdelerine Oracle'ye ait kodlamalar yazılınabilinir.
        (oracle ilgili bağlantı cümlesi - database bağlan - database üzerinden belli bilgileri belli kriterlere göre al vs vs..)
    Farklı bir ProductService Ekleyip (MySqlProductService), Gene IProductServisini kullanan bir metot olabilir.
    Ve bu metotta içerisinde aynı metotlara sahip olcak ve çalıştığı database servisi Provider'ı farklı olacak.
    İlerleyen aşamalarda MSSQL üzerinden çalışmak istendiğinde,
    gene aynı IProductService'si üzerinden işlem yapıp gene aynı metotların içini doldurabilmekteyiz.
    Ve burdaki metot isimleriyle, hali hazırda çalışan uygulamanın çalışması hiçbir zaman bozulmayacak çünkü bir Class'a bağlı değil bir Interface'ye bağlı olacak.
    Biz bu interfacenin dolu versiyonunun nerden geldiğiyle ilgilenicez.
        (OracleProductService - MSSQLProductService )
    Yani uygulamadaki bağımlılıkları gideren bir yapıdır.
*/ 
