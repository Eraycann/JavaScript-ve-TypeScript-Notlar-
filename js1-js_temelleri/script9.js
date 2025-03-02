let simdi = new Date();     // şimdiki tarih - saat

// Get Methods
sonuc = simdi;              // 2022-04-10T03:50:29.058Z     object
simdi = simdi.getDate();    // (gün) 10                     number
sonuc = simdi.getDay();     // 0: pazar ..  6: cmt          number
sonuc = simdi.getFullYear();// (yıl) 2022                   number
sonuc = simdi.getHours();   // (saat)                       number
sonuc = simdi.getTime();    // (saniye - ms cinsinden)      number  (1649562786898)

// Set Methods
simdi.setFullYear(2025);    // 2025-04-10T03:50:29.058Z     object
simdi.setMonth(7);          // 2025-08-10T03:50:29.058Z     object  (0: Ocak .. 11: Aralık)
simdi.setDate(15);          // 2025-08-15T03:50:29.058Z     object



let dogumTarihi = new Date(1990, 5, 15);    // ilgili tarih için bir nesne tanımladık. ( Date() bir fonksiyondur ) ( ? olan parametreleri nullable'dir.)
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();    // yaş öğreniriz    (kaba hesaptır, tam neticeyi vermez, sadece yılları çıkarttık)
let milisecond = simdi - dogumTarihi;    // (milisecond cinsinden sonuç dönderir, ordan hesaplarız)
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;




sonuc = simdi;
console.log(sonuc)
console.log(typeof sonuc)
