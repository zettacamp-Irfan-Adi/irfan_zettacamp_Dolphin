import { Routes ,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module'; 
import { MainModule } from "./main/main.module";

import {ItemDetailComponent} from './main/item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import  {MenuItemComponent} from './main/menu-item/menu-item.component';




const appRoutes:Routes = [
  {path: '',component:MenuItemComponent},
  {path: 'Details/:id',component:ItemDetailComponent},
  {path: 'not-found',component:PageNotFoundComponent},
  {path: '**',redirectTo:'/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    MainModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
