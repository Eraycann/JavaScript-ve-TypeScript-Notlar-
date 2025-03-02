// && and
// || or

let mezuniyet  = "üniversite";
let yas = 20;

if(yas >= 18 && (mezuniyet=="üniversite" || mezuniyet =="lise"))
{
    console.log("ehliyet alabilir");
} else {
    console.log("ehliyet alamaz");
}

// bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

let sayi = -21;
if ( sayi % 2 == 1 && sayi > 0) {         // Math.abs() metodu mutlak değerini sunar.
    console.log("pozitif tek sayidir.");
}
