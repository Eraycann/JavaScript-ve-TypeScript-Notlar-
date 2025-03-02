let url = "https://www.eraycansivri.com/";
let kursAdi = "Web Geliştirme Kursu";

// Url Kaç krkterlidir?
url.length;

// kursAdi[0] kaç kelimeden oluşmaktadır?
kursAdi.split(" ").length;

// url https ile mi başlıyor?
url.startsWith("https");    // true

// kursAdi içerisinde Eğitimi kelimesi geçiyor mu
if(kursAdi.indexOf("Eğitimi") > -1) {       // indexOf() sonrası olmaması -1 dönderir
    console.log("evet var");
} else {
    console.log("hayır yok");
}

// url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz
// https://eraycansivri.com/web-geliştirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");  // replace() metodu ilk bulduğu krkteri çevirirken, replaceAll() metodu tüm krkterleri çevirir.
kursAdi = kursAdi.replace("ş","s").replace("ı","i");    // ardarda kullanım mevcut

let sonuc = `${url}/${kursAdi}`;

