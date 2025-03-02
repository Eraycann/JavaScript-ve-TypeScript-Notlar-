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