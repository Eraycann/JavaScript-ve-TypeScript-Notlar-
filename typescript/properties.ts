interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    constructor(private _location?: Point, private _color?: string) {    

    }

    travelTo(point: Point): void {
        console.log(`taksi X: ${this._location.x} Y: ${this._location.y} dan X:${point.y} Y: ${point.y} noktasına gitmektedir.`);
    }

    get location() {
        return this._location;   // metot zaten class içinde old. için private de olsa ulaşılabilinir.
    }   // get ve set birer keyworddür.

        // setLocation - getLocation ile kontrollü bir şekilde set ve get işlemlerini yapabilmekteyiz.

    set location(value: Point) {
        if(value.x<0 || value.y < 0) {
            throw new Error('Kordinat bilgileri negatif olamaz');   // eğer if sağlanırsa, böylece bir hata fırlatırız.
        }
        this.location = value;
    }
}


let taxi_1: Taxi = new Taxi({ x:2, y:3});
taxi_1.travelTo({ x:1, y:2});

let currentLocation = taxi_1.location;  // get aktif olur
taxi_1.location = { x:2, y:5};  // set aktif olur