let dogumTarihi = "2010";
console.log(parseInt(dogumTarihi));     // dogumTarihi'ni Int'e çevirir.

let suankiYil = new Date().getFullYear();   // pc saatini kullanarak yılı verir.

let ortalama = 73.3333;
console.log(typeof ortalama);   // Number


let a = 10;
let b = 20;

let sonuc = a++;    // önce a'yı sonuc'a atar, sonra a'yı arttırır.
console.log(sonuc); // 10
console.log(a);     // 11

sonuc = ++a;        // önce a'yı arttırır, sonra a'yı sonuc'a atar.
console.log(sonuc); // 12
console.log(a);     // 12

sonuc = --a;    
sonuc = a--;    

sonuc += a;
sonuc -= a;
sonuc *= a;
sonuc /= a;
sonuc %= a;     // sonuc = (sonuc % a)

sonuc += (a+b); // sonuc = sonuc + (a + b)

sonuc = (a == b);   // console.log(sonuc)   /// false
sonuc = (a != b);

sonuc = (3 == "3")  // true     /// type kontrolü yapmaz, değer kontrolü yapar
sonuc = (3 === "3") // false    /// type kontolü yapar, değer kontrolü yapar.

sonuc = (a > b);
sonuc = (a < b);
sonuc = (a <= b);
sonuc = (a >= b);









