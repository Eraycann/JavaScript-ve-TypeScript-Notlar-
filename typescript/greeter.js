function greeter(name) {
    console.log('hello' + name);
}
var user = 'Sadık';
greeter(user);
// Tarayıcı js dosyalarını tanır, ts dosyalarını tanımaz.
// bu yüzden ts dosyalarını compailer aracılığıyla, ts uzantılı bir dosyaya çeviriyo olmamız gerekmektedir.
// terminal > tsc greeter.ts yazdığımızda bu dosyayı js dosyasına çevirir.
