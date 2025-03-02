import { Point } from "./Point";    // Vehicle.ts Point'e ihtiyaç duyuyor

export interface Vehicle {
    travelTo(point: Point): void;
}
