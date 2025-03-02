interface Point {   // Point interfacesi tanımladık. Bizim objectimizin şeklini belirlicek bi yapı.
    x: number,
    y: number
}

interface Passanger {
    name: string;
    phone: string;
}

interface Vehicle {
    currentLocation: Point; // currentLocation Point type'ında olsun.
    travelTo(point: Point): void;   // interface/class içinde tanımlandığından bu bir metottur.
        // interface içinde, o interfaceye hizmet edecek metodu, gövdesiz bir şekilde yazıyoruz.
    getDistance(pointA: Point, pointB: Point): number;
    addPassanger(passanger: Passanger): void;  // passanger parametresinin Type'ı ise, Passanger interfacesi olsun.
    removePassanger(passanger: Passanger): void;
            // Artık alttaki fonksiyonlara ihtiyacımız yok. Bu fonksiyonları Vehicle interface'si içinde tanımladık.
}

let travelTo = (point: {x: number, y:number}) =>  {     // metoda parametre olarak bir object gönderdik. object içindeki parametrelerin tiplerini de zorunlu olarak bildirebiliyoruz.
    // ..
}   // Bunlar dışarıda yazıldığından bir fonksiyondur.

let travelTo2 = (point: Point) =>  {     // interface yordamıyla, point parametresi Point türünde olduğunu belirttikk
    // ..
}

travelTo({  // metotu kullanırken, objectin x ve y parametrelerini girmek zorunlulğu oluşur
    x: 1,
    y: 2
});



let getDistance = (pointA: Point, pointB: Point)  // metotun parametrelerinin tipi point objecti olsun dedik. Hali hazirda böyle olmadığı için yazımı alttaki gibi olcak
// let getDistance = (pointA:{x: number, y:number}, pointB:{x: number, y:number})  // Bu şekilde yazmaktansa, bir interface tanımlayabiliriz.


// taxi_1 => 41  abc 41
// taxi_1.currentLocation   // taxi_1 konumu sorgulama
// taxi_1.travelTo()        // taxi_1, bir konuma gitmekte kullanımak için  yazılınır.


// taxi_2 => 41  abd 41
// taxi_2.currentLocation   
// taxi_2.travelTo()        

// interface ile ilerde oluşturacağımız objectin bir planını bir modelini bir imzasını oluşturmuş olduk.