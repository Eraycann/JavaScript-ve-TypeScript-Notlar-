interface Point {   // Point interfacesi tanımladık. Bizim objectimizin şeklini belirlicek bi yapı.
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point; // currentLocation Point type'ında olsun.
    travelTo(point: Point): void;   // interface/class içinde tanımlandığından bu bir metottur.
}

class Taxi implements Vehicle {
    // ..
    
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

class Bus implements Vehicle {
    // ..
    
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi();      // :Taxi ile type'ı belirtilmesede olur.
taxi_1.travelTo({ x:1, y:2});
taxi_1.currentLocation = { x:2, y:5}

let taxi_2: Taxi = new Taxi();      
taxi_2.travelTo({ x:5, y:6});
taxi_2.currentLocation = { x:2, y:5}
    // her tanımlanan object için, şablondan kopya oluşturulur.

let bus_1 = new Bus();

// tsc objects.ts ile derlenip
// node objects.js ile çalıştırabiliriz.