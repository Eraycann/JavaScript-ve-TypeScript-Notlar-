import { Vehicle } from "./Vehicle";
import { Point } from "./Point";    // Vehicle.ts Point'e ihtiyaç duyuyor


export class Taxi implements Vehicle {  // taksiyi dışarı açmak için export kullandık. ( artık Taxi sınıfını, Taxi.ts dışında kullanabilmekteyiz.)
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