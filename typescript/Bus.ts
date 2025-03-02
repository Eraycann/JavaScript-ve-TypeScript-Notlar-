import { Vehicle } from "./Vehicle";
import { Point } from "./Point";    // Vehicle.ts Point'e ihtiyaç duyuyor

export class Bus implements Vehicle {
    travelTo(point: Point): void {
        throw new Error("Method not implemented.");
    }

}