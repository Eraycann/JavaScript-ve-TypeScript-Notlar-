interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // default access modifier publicttir.
    constructor(private location?: Point, private color?: string) {     // erişim belirteçlerini burda tanımlayabilmekteyiz

    }

    travelTo(point: Point): void {
        console.log(`taksi X: ${this.location.x} Y: ${this.location.y} dan X:${point.y} Y: ${point.y} noktasına gitmektedir.`);
    }
}


let taxi_1: Taxi = new Taxi({ x:2, y:3});
taxi_1.travelTo({ x:1, y:2});