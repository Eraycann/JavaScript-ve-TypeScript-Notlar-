for(let i =0; i < 10; i++){         //  i < 10 == true old. sürece dvm ettir.
    console.log(i);
}


let sayilar = [1,2,3,4,5,6,7,8,9,10];

for(let i=0; i < sayilar.length; i++){
    toplam += sayilar[i];
}

    // in operatörü
for(let index in sayilar){      // aslında herbir döngü sayıların index no old. için index diye isimlendirdik.
    console.log(index);
}

for(let i in sayilar){
    console.log(sayilar[i]);
}

    // of operatörü
for(let sayi of sayilar){       // index ile uğraşmadan sayi getirtme
    console.log(sayi);
}



let user = {
    "name": "Eraycan Sivri",
    "username": "eraycansivri",
    "password": "12345",
    "email": "info@eraycansivri.com"
};

for(let key in user){   // object'in index no'su, keylere karşılık geliyor.
    console.log(key);           // name        ..   email                   (key bilgisi)
    console.log(user[key]);     // Eraycan Sivri ..   info@eraycansivri.com     (value bilgisi)
}

