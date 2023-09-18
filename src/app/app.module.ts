// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PlayerListComponent } from './players/player-list/player-list.component';
// import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { FootballService } from './shared/football.service'; // Import the FootballService
import { TransferListComponent } from './transfers/transfer-list/transfer-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    // PlayerDetailsComponent,
    TransferListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [FootballService], // Provide the FootballService here
  bootstrap: [AppComponent],
})
export class AppModule {}
