interface Point {   
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point; 
    travelTo(point: Point): void;   
}

class Taxi implements Vehicle {

    color: string;

    constructor(location?: Point, color?: string) {  // color? yaptığımızda nullable olacağı için, değer versekte olur vermesekte.
        this.currentLocation = location;
        this.color = color;
    }
    
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi({ x:1, y:5},'Red');
taxi_1.travelTo({ x:1, y:2});
// taxi_1.color = 'Red';    // Object üzerinden ulaşıp doldurmak yerine, bir nesne üretirken ctor aracılığıyla ilk değerlerini verebilmekteyiz.
let taxi_2 = new Taxi({ x:1, y:2});     // color?
let taxi_3 = new Taxi();                // location? color?


// let taxi_1: Taxi = new Taxi();      
// taxi_1.travelTo({ x:1, y:2});
// taxi_1.currentLocation = { x:2, y:5}

