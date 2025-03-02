let number = 5; // number değişkeni type'i number olarak tanımlandı, ts'de değiştirilemez.
number = 'a';   // bu durum typescript için bir sorun teşkil edecektir. js için bir problem teşkil etmediğinden, derlendiğinde js üzerinde çalışacaktır.


let a;  // a değişkeni type'i any olarak tanımlandığı için, altta type'ı değiştirilebilinir.
a = 5;
a = 'a';
a = true;


let b:number;   // b değişkeninin type'ı number olarak tanımlandı.
b = 5;
b = 'a';
b = true;


let c: number = 5;
let d: string = 'a';
let e: boolean = true;
let f: any;
let g: number[] = [1,2,3];
let h: Array<number> = [1,2,3];  // g ve h değişkenleri aynıdır sadece yazım farkı var.
let x: any[] = [1,'a',true];
let y: [string,number,boolean] = ['a',5,false]; // tuple


const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;
    // Şeklinde bir yazım yerine, modern dillerde olan enum yapısından istifade ederiz.

enum Payment {kredi=0, havale=5, kapidaodeme=2, eft=3}; // index atama mecburi değil, karışmasın diye yapıldı.

let kredi = Payment.kredi;  // 0
let havale = Payment.havale;  // 5
let kapidaodeme= Payment.kapidaodeme;  // 2
let eft = Payment.eft;  // 3


