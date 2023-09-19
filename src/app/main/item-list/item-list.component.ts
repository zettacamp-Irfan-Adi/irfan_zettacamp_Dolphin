import { Component, OnInit,OnDestroy, } from '@angular/core';
import { StockManagementService } from "../../stock-management/stock-management.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  constructor(public stockService: StockManagementService) { }
  itemsData: any[] = [];

  ngOnInit() {
    this.stockService.itemData$.subscribe((data) => {
      this.itemsData = data;
      console.log(this.itemsData);
    });
  }

  seeDetail(index: number): void {
    const selectedDetail = this.itemsData[index];
    this.stockService.detailData(selectedDetail);
  }

 

}
