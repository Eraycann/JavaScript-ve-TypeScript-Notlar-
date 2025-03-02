function selamlama(msg){    // fonksiyon isimlendirmesinde küçük harf kullanılır
    console.log(msg);
}

selamlama("slm");
selamlama();        // undefined



function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

function emekliligeKacYilKaldi(dogumYili,isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;

    if(kalan_sene > 0 ) {
        console.log(`${isim}, emekli olmanıza ${kalan_sene} kaldı.`);
    } else {
        console.log("zaten emekli oldunuz.")
    }
}

