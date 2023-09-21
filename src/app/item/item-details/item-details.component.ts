import { Component, OnInit } from '@angular/core';
import {ManageService} from '../../shared/manage.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  // card: any | undefined;
  itemsData:any
  constructor(private service:ManageService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const cardId = this.route.snapshot.params['id'];
    let card = parseInt(cardId);
    this.itemsData = this.service.getCarById(card);
    console.log(this.itemsData);
    // this.service.getCarById(card).subscribe((data: any) => {
    //   this.itemsData = data;
    //   console.log(this.itemsData);
    // });
  }

}
