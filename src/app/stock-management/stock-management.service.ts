import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router,ActivatedRoute} from '@angular/router';
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


  constructor(private router: Router) { 
    this.itemList.next([this.itemData]);
  }
    

  addItemData(name:string,brand:string,stock:number,Description:string,Color:string,price:number,inputImg:string) {
    // console.log(inputImg);
    const currentData = this.itemList.value;
    const datas = {name,brand,stock,Description,Color,price,inputImg} 
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
    this.router.navigate(["/"]);
  }
 



}
