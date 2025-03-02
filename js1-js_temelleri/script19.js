var isim = "Ahmet";     // global scope

function yazdir(){
    var isim = "Ayşe";
    console.log(isim);      // fonksiyon scope'leri içinde isim değişkeni bulamazsa, global scope'e bakar.
}

if(true) {
    var isim = "Zeynep";    // var yerine let ile tanımlasayık, kendi scope'ini tanımlayacaktı.
    console.log(isim);
}

console.log(isim);
yazdir();

const adres = "İstabul";    // const değişken sabit demek. Uygulama içerisinde birdaha değiştirilemez demek.



// Fonksiyonlar kendi içinde scope alanları oluştururken,
// block içerisinde yeni bir scope oluşmaz. (let,const)
    // yani esasen, fonksiyon gibi davranan scope'ler oluşturmak için if bloklarında; (let,const) keywordlerini kullanabilmekteyiz.

