import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskSidebarComponent } from './task-sidebar/task-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    TaskInputComponent,
    TaskSidebarComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
