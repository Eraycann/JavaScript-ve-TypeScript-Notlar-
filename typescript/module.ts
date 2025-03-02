import { Taxi } from "./taxi";  // export ile dışarı açtığımız classı import ettik





let taxi_1: Taxi = new Taxi({ x:2, y:3});
taxi_1.travelTo({ x:1, y:2});

let currentLocation = taxi_1.location;  // get aktif olur
taxi_1.location = { x:2, y:5};  // set aktif olur