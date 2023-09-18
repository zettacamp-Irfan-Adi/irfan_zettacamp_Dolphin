import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPlayerList: boolean = true;
  showTransferList: boolean = false;

  togglePlayerList() {
    this.showPlayerList = true;
    this.showTransferList = false;
  }

  toggleTransferList() {
    this.showPlayerList = false;
    this.showTransferList = true;
  }
}
