import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockManagementService {
  itemData:any = 
    {name : "G30",
    brand : "Logitech",
    stock : 5,
    Description :"mouse bagus dalam segala kondisi dapat meningkatkan skill bermain",
    Color : "black",
    price : 50000,
    inputImg : "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g305/g305-gallery-1.png?v=1"
  };
  public itemList = new BehaviorSubject<any[]>(this.itemData);
  itemData$ = this.itemList.asObservable();

  selectData = new BehaviorSubject<any[] | null>(null);
  selectedData$ = this.selectData.asObservable();
  
   constructor() { 
      this.itemList.next([this.itemData]);
    }

  addItemData(name:string,inputBrand:string,inputStockAsNumber:number,inputDesc:string,inputColor:string,inputPriceAsNumber:number,inputImg:string) {
    // console.log(inputImg);
    const currentData = this.itemList.value;
    const datas = {name,inputBrand,inputStockAsNumber,inputDesc,inputColor,inputPriceAsNumber,inputImg} 
    // console.log('Updated Data:', currentData); // Add this line
    currentData.push(datas);
    this.itemList.next(currentData);
    alert("Berhasil menambahkan data");
  }

  detailData(i:any){
    this.selectData.next(i);
  }

  resetSelectedData() {
    this.selectData.next(null);
  }
 


}
