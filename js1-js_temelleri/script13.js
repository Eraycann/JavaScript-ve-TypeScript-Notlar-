// dict, json       (key-value)     (object)
let kullaniciA = {
    "ad": "Eraycan",
    "soyad": "Sivri",
    "yas": 21,
    "adres": {                        // nested key-value
        "sehir": "Ankara",
        "ilce": "Çankaya"
    },
    "hobiler": [["sinema"],["spor"]]    // nested array
}

let kullaniciB = {
    "ad": "Can",
    "soyad": "Sivri",
    "yas": 19,
    "adres": {                          // object içinde object tanımlamak
        "sehir": "İstanbul",
        "ilce": "Ataşehir"
    },
    "hobiler": [["sinema"],["spor"]]      // object içinde dizi tanımlamak
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];   // sinema
sonuc = kullaniciA.hobiler[1];   // spor


let kullanicilar = [                // dizi içinde object tanımlamak
    kullaniciA,
    kullaniciB
];
sonuc = kullanicilar[1].ad; // Eraycan


let urunler = [                     // dizi içinde object tanımlamak
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
];
sonuc = urunler[0].urun_adi;    // samsung s22