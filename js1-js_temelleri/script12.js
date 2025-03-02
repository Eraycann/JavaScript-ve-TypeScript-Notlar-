let meyveler = ["Elma","Armut","Muz","Çilek"];

// Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]);   // Elma
console.log(meyveler[meyveler.length - 1]);  // Çilek

// Elma dizinin bir elemanı mıdır
console.log(meyveler.includes("Elma")); // true
console.log(meyveler.indexOf("Elma"));  // 0   (-1'den büyük değer dönderdiği taktirde buldu demektir.)

// Kiraz meyvesini listenin sonuna ekleyiniz
// 1. Yöntem
meyveler[meyveler.length] = "Kiraz";
// 2. Yöntem
meyveler.push("Kiraz");

// Dizinin son 2 elemanı siliniz.
// 1. Yöntem
meyveler.pop;
meyveler.pop;
// 2. Yöntem
meyveler.splice(meyveler.length - 2, 2);


let ogr1 = [
    "Yiğit",
    "Bilgi",
    2010,
    [70,60,80]
];

let ogr2 = [
    "Ada",
    "Bilgi",
    2012,
    [80,80,90]
];

let ogr3 = [
    "Ahmet",
    "Bilgi",
    2009,
    [60,60,70]
];

let ogrenciler = [ogr1, ogr2, ogr3];

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
console.log(yigit_not.toFixed(1));  //  70.0