//      ARRAY
let urunler = ["iphone 12","iphone 13","iphone 13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold","siyah","beyaz"];

let urun1 = ["iphone 12", 9000, "gold"];

let urun2 = [];
urun2[0] = "iphone 13";
urun2[1] = 12000;
urun2[2] = "siyah";

let urun3 = [
    "iphone 13 pro",
    20000,
    ["siyah","beyaz","mavi"]
];

console.log(urun3[2]);          //  ['siyah', 'beyaz', 'mavi' ]
console.log(urun3[2][0]);       //  siyah
console.log(typeof urun3[2])    //  object

let kursAdi = "Web Geliştirme Eğitimi";
console.log(kursAdi.split(" ")[2]);     // Eğitimi


