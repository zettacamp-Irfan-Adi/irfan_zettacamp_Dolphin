// transfers/transfer-list/transfer-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../shared/football.service';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {
  transfers: any[] = [];

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
    this.transfers = this.footballService.transfers;
  }
}
