import { NgModule } from '@angular/core';
import { PlayerListComponent } from './player-list/player-list.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [],
  imports: [FormsModule], 
  exports:[PlayersModule]
})
export class PlayersModule {}
