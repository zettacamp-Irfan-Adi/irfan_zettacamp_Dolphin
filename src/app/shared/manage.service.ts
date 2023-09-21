  import { Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class ManageService {
    Car=[
        {
          id:1,
          name:"Ertiga",
          brand:"Suzuki",
          stock:5,
          price:50000000,
          year:2008,
          color:"black",
          img:"https://img.cintamobil.com/crop/640x360/2023/08/06/20230806134524-2652.jpg",
          owner:{
            name:"Irfan",
            city:"Yogyakarta",
            address:"Jalan Wiroasri nomor 2"
          }
        },{
          id:2,
          name:"Avanza",
          brand:"Toyota",
          stock:10,
          price:100000000,
          year:2010,
          color:"silver",
          img:"https://apollo-singapore.akamaized.net/v1/files/t8r1rqzhuyqb1-ID/image",
          owner:{
            name:"aldi",
            city:"garut",
            address:"Jalan garut nomor 2"
          }
        }
        ,{
          id:3,
          name:"Avanza",
          brand:"Toyota",
          stock:10,
          price:100000000,
          year:2010,
          color:"silver",
          img:"https://statik.tempo.co/data/2023/06/21/id_1213758/1213758_720.jpg",
          owner:{
            name:"aldi",
            city:"garut",
            address:"Jalan garut nomor 2"
          }
        }

    ]


    carDataObj = new BehaviorSubject<any[]>(this.Car);
    carData$ = this.carDataObj.asObservable();
    constructor() { }

    addCar(car:any){
      const carData = this.carDataObj.value;
      carData.push(car);
      this.carDataObj.next(carData);
      console.log(carData);
    }

    updateCar(carId: number, updatedCar: any) {
      const cars = this.carDataObj.value;
      const index = cars.findIndex((car) => car.id === carId);
      
      if (index !== -1) {
        cars[index] = updatedCar;
        this.carDataObj.next([...cars]); // Use spread operator to ensure immutability
      }
    }


    getCarById(id: number): any | null {
      const cars = this.carDataObj.value; // Use the value property
      const selectedCar = cars.find((car) => car.id === id);
      // console.log(selectedCar);
      return selectedCar || null;
    }
    
    


  }
