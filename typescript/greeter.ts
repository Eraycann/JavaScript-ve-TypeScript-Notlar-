function greeter(name) {
    console.log('hello' + name);
}

let user = 'Sadık';     // let keywordü ES6 ile geldiğinden, js dosyasında var keywordü ile değiştirildi.

greeter(user);

// Tarayıcı js dosyalarını tanır, ts dosyalarını tanımaz.
// bu yüzden ts dosyalarını compailer aracılığıyla, ts uzantılı bir dosyaya çeviriyo olmamız gerekmektedir.
// terminal > tsc greeter.ts yazdığımızda bu dosyayı js dosyasına çevirir.
// typescript dosyasına normal js kodu da yazılınabilmektedir.
// terminal > node greeter.js ile node.js derleyicisi buna çalıştırabilcektir. (tarayıcı da çalıştırabilir.)

