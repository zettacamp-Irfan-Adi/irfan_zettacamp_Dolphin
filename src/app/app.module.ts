import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { DataCardModule} from './data-card/data-card.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DataCardModule,FormsModule
  ],
  exports:[FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
