let ad = "Eraycan";
let soyad = "Sivri";
let yas = 21;
let sehir = "Ankara";

let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'de yasıyorum.' + 'Emekliliğe ' + (65 - yas) + ' yılım kaldı.';      //  \' şeklinde bir kullanımla, ' karakterinin keyword olmadığını temsil eder.
console.log(mesaj);

// backtick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${65 - yas} yılım kaldı.`;
console.log(mesaj);

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Zaten emekli oldunuz.";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`;
console.log(mesaj);

