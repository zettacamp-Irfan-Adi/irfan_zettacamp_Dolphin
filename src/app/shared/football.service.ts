// shared/football.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  transfers: any[] = [
    { playerName: 'antony', status: 'Transferred' },
    { playerName: 'luuk de jong', status: 'Not Transferred' },
    // Add more transfer data
  ];

  constructor() {}

  updateTransferStatus(playerName: string, newStatus: string) {
    const player = this.transfers.find(transfer => transfer.playerName === playerName);

    if (player) {
      player.status = newStatus;
    }
  }

  addPlayer(playerName: string, status: string) {
    const newPlayer = { playerName, status };
    this.transfers.push(newPlayer);
  }
}
