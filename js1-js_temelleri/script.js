console.log("mrb");     // ekrana yazar

// !! node script.js ile ilgili script çalıştırılır.
// !! ister nodejs derleyicisinde (terminal), istersende tarayıcıda çağrılacak kullanılabilinir.

var maasCan = 6000;     // değişken tanımlama isimlendirmesi doğru kullandık.

var urunAdi = "iphone 13";
let urunFiyat = 15000;

console.log(typeof urunAdi);    // string

let sayi1 = "10";
let sayi2 = "20";
console.log(Number(sayi1) + Number(sayi2));     // Number dönüştürme


let sayi3 = 10;
console.log(sayi3.toString());                  // string dönüştürme


let sinavNotu = 70;
let basariliMi = (sinavNotu >= 50);     // true
console.log(typeof basariliMi)  // boolean


let yas;
console.log(yas);   // undefined
console.log(typeof yas)     // undefined


yas = "";
console.log(typeof yas);    // string   (boşluk değeri atandı)













