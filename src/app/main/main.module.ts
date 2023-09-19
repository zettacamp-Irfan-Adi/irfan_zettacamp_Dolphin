import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { InputFormComponent } from './input-form/input-form.component';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component'; 


@NgModule({
  declarations: [
    HeroComponent,
    InputFormComponent,
    ItemListComponent,
    ItemDetailComponent
  ],
  imports: [
    CommonModule ,FormsModule
  ],
  exports:[
    HeroComponent,InputFormComponent,ItemListComponent,ItemDetailComponent
  ]
})
export class MainModule { }
