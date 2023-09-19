import { Component, OnInit , OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { StockManagementService } from '../../stock-management/stock-management.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit,OnDestroy  {
  constructor(public stockService: StockManagementService) { }
  selectedData: any | null;
  private subscription: Subscription | undefined;



  ngOnInit(): void {
    this.subscription = this.stockService.selectedData$.subscribe((data) => {
      this.selectedData = data;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the subscription to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
