let ogrenciler = ["çınar","yiğit","ada"];

sonuc = ogrenciler.length;  // 3

// array to string
sonuc = ogrenciler.toString();  // çınar,yiğit,ada
sonuc = ogrenciler.join(" ");   // çınar yiğit ada (string döner) (toString() metodunun, araya ayraç eklenmeli hali)


// eleman silme
sonuc = ogrenciler.pop();   // son eleman silinir ve silinen eleman geri döndürülür
sonuc = ogrenciler.shift(); // ilk eleman silinir ve silinen eleman geri döndürülür

//eleman ekleme
sonuc = ogrenciler.push("sena");    // dizinin sonuna eleman ekler
sonuc = ogrenciler.unshift("sena"); // dizinin başına eleman ekler


let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

sonuc = markalar1.concat(markalar2,markalar3);    // +2 diziyi üst üste ekler (orjinal diziler değiştirilmez)  (string dizisi döner)
markalar1.splice(0,0,markalar2);    
//  0. indexten başla
//    0 adet eleman sil
//      ilgili dizinin üzerine, ..dizisini ekle
//          (silinen eleman dizisi dönderir)    (0 adet silersen, boş dizi dönderir)
//  [ [ 'opel' 'renault' ], 'mazda', 'toyota' ]

markalar1.splice(0,0,"bmw","audi");
//  [ 'bmw', 'audi', 'mazda', 'toyoya' ]

sonuc = markalar1.splice(0,1);  
//  dizinin 0. indexinden başla, 1 tane eleman sil.

