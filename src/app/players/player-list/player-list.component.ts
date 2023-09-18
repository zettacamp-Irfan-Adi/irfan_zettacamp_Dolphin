// players/player-list/player-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../shared/football.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: any[] = [];
  newPlayerName: string = '';
  selectedStatus: string = ''; // Initialize with an empty status
  availableStatuses: string[] = ['Transferred', 'Not Transferred']; // Define the available statuses

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
    this.players = this.footballService.transfers.filter(transfer => transfer.status !== 'Transferred');
  }

  addNewPlayer() {
    if (this.newPlayerName && this.selectedStatus) { // Check if a status is selected
      this.footballService.addPlayer(this.newPlayerName, this.selectedStatus);
      this.newPlayerName = '';
      this.selectedStatus = ''; // Reset the selected status
    }
  }
}
