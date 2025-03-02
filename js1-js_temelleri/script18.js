// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
function kelimeYazdir(kelime, adet) {
    for (let i=0; i < adet; i++ ) {
        console.log(kelime);
    }
}
kelimeYazdir("eğitim", 2);


// 2- Yazı tura uygulamasını fonksiyon kullanarak yazınız.
function yaziTuraAt() {
let random = Math.random();
if(random < 0.5) {
    console.log("yazı");
} else {
    console.log("tura");
}
}
yaziTuraAt();


// 3- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde gönderilen fonksiyonu yazınız.
function tamBolenler(sayi) {
    let sayilar = [];

    for(let i=2; i < sayi; i++) {
        if(sayi % i == 0) {
            sayilar.push(i);
        }
    }
    return sayilar;
}
console.log(tamBolenler(10));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon yazınız
function toplam() {
    console.log(arguments); // (gönderilen parametreleri key/value şeklinde tutar.
        //  [Arguments] { '0' : 2, '1': 5}
    let sonuc = 0;
    for(let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }
    return sonuc;
}
console.log(toplam(2,5));
console.log(toplam(2,5,7));
