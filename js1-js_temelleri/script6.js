let kursAdi = "Uygulamalı Web Geliştirme Eğitimi";

let sonuc;

// string metotları/propertyleri, String sınıfından alır.

sonuc = kursAdi.toLowerCase();  
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[1];
sonuc = kursAdi.slice(0,6);     // 0. indexten başlar, 6. index'e kadar alır getirir.
sonuc = kursAdi.slice(10);      // 10. indexe kadar
sonuc = kursAdi.slice(-10,-5);  // soldan sağa 

sonuc = kursAdi.substring(0,6); // slice() ile aynı
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi","Kursu"); // İstediğin karakteri istediğin karaktere çevirir.

sonuc = kursAdi.trim();     // baştaki ve sondaki boşlukları siler.
sonuc = kursAdi.trimStart();  // baştaki
sonuc = kursAdi.trimEnd();  // sondaki

sonuc = kursAdi.indexOf("Komple");  // başlangıç indexini getirir.

sonuc = kursAdi.split(" "); // boşluk karakterinden ayırır ve bir dizi olarak dönderir.

sonuc = kursAdi.split(" ")[0];  // Uygulamalı
sonuc = kursAdi.split(" ")[3];  // Web




console.log(sonuc);