let sonuc;

sonuc = 10;         // number   10
sonuc = "10";       // string   10
sonuc = Number("10");   // number 10
sonuc = parseInt("10.6");   // number 10
sonuc = parseFloat("10.6"); // number 10.6
sonuc = parseInt("10a");    // number 10
sonuc = parseInt("a10");    // number NaN ( Not a Number)

sonuc = isNaN("10a");   // boolean true     /// Sayısal bir değer değil, değil mi?
sonuc = isNaN("10");    // boolean false



let sayi = 15.12355667;

sonuc = sayi.toPrecision(5);    // (15.124)  (tam sayı + ondaliklı bas.) 5 bas. dönderir. (yuvarlayarak)
sonuc = sayi.toFixed(5);        // (15.12356)   (ondalikli bas.) 5 bas. dönderir (yuvarlama yapar)

sonuc = Math.round(2.4);    // (yuvarlar) 2
sonuc = Math.ceil(2.4);     // (yukarı yuvarlar) 3
sonuc = Math.floor(2.6);    // (alta yuvarlar) 2
sonuc = Math.sqrt(25);      // (karakök alır) 5
sonuc = Math.pow(2,3);      // (üzeri alır) 8
sonuc = Math.abs(-10);      // (mutlak alır) 10
sonuc = Math.min(4,6,8,9)   // (min getirir) 4
sonuc = Math.max(4,5,6,7,8);// (max getirir) 8
sonuc = Math.random();      // (rastgele sayı)  (0-1 arasında) (ondalıklı)
sonuc = Math.random() * 10; // (0-9 arasında)   (ondalıklı)
sonuc = Math.floor(Math.random() * 10); // (0-9 arasında)   (tam sayı)
sonuc = Math.floor(Math.random() * 10) + 50; // (50-60 arasında)    (tam sayı)


// Eğerki bir sınıf üzerinden ulaşıyorsanız buna metot denir, herhangi bir sınıfa bağlı olmadan ulaşırsanız ise fonksiyon denir.

console.log(typeof sonuc);
console.log(sonuc);
