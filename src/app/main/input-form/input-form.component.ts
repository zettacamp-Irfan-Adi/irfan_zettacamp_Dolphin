import { Component, OnInit } from '@angular/core';
import { StockManagementService } from "../../stock-management/stock-management.service";
// import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  // itemData: any = {};
  
  colors: string[] = ['Red', 'Blue', 'Green', 'Yellow', 'Other'];

  constructor(public stockService: StockManagementService) { }

  additem(inputName:string,inputBrand:string,inputStockAsNumber:number,inputDesc:string,inputColor:string,inputPriceAsNumber:number,inputImg:string) {
    this.stockService.addItemData(inputName,inputBrand,inputStockAsNumber,inputDesc,inputColor,inputPriceAsNumber,inputImg);
  }

  ngOnInit(): void {
  }
}
