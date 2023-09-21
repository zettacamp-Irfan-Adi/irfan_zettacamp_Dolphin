import { Component, OnInit } from '@angular/core';
import { ManageService } from "../../shared/manage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private manageservice:ManageService,private route:Router) { }
  itemsData: any[] = [];
  ngOnInit(): void {
    this.manageservice.carData$.subscribe((data) => {
      this.itemsData = data;
      console.log(this.itemsData);
    });
  }


}
