function getAverage(a: number, b: number, c?: number): string {     
    // number harici bir parametre yollandığında, çalışma zamanı değil, derleme zamanında hata vermesi içim, type'nı peşin peşin belirttik. 
    // en sonda :string yazarak, geriye dönecek değerin string olacağını belirttik.
    // c? yaparak, c'nin nullable olacağını belirttik.
    const result = (a+b+c)/3;
    return 'result : ' + result;
}

getAverage(10,20,30);
getAverage(10,20);



function getAverage2(...a: number[]): string {  // belirsiz sayıda parametre gelecekse, gelecek olan parametreleri, rest parameter kavramıyla alırız. (...a: number[])  Parametre değerini sayısal bir dizi olarak bekler. string, fonksiyonun geriye dönüş tipidir.
    let total = 0;
    let count = 0;

    for(let i =0; i<a.length;i++) {
        total += a[i];
        count++;
    }

    const result = total/count;
    return 'result : ' + result;
}

getAverage2(10);
getAverage2(10,20);
getAverage2(10,20,30);
getAverage2(10,20,30,40);
getAverage2(10,20,30,40,50);    // gönderilen parametre farketmez. (rest parameters)


    // getAverage2 fonksiyonunu, arrow fuctions ile tanımlayalim.
const getAverage3 = (...a: number[]): void => { 
    let total = 0;
    let count = 0;

    for(let i =0; i<a.length;i++) {
        total += a[i];
        count++;
    }

    const result = total/count;
    // return 'result : ' + result;
}