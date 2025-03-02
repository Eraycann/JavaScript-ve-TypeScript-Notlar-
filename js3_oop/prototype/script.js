// OOP: Nesne Tabanlı Programlama
// Object

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}


// Artık her bir object yapısına cevabiKontrolEt fonksiyonunun/metodunun bir kopyası gönderilmedi.
// Bu sadece soru prototype içerisinde bir kere kullanıldı.
// Ve bunu bütün object'ler aynı yerden gidip, o metodun referansını çağırıp kullanacak.
// Eğerki 200 tane soru tanımlamış olsak, 200 kere bu fonksiyonu tekrarlamış olmayacağız.
// Bir kere yazıyoruz ve bunu 200 tane fonksiyon gerektiğinde Soru içindeki prototype içindeki fonksiyonu alıp kullanabilecek.
// Böylece daha performanslı bir uygulama yazmış olmaktayız.
Soru.prototype.cevabiKontrolEt = function(cevap) {      
    return cevap === this.dogruCevap
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b");

let sorular = [
    new Soru("Hangisi js paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]
