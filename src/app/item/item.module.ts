import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';

const itemRoutes: Routes = [
  { path: '', component: ItemListComponent},
  { path: 'item-detail/:id', component: ItemDetailsComponent},
];


@NgModule({
  declarations: [
    ItemListComponent,
    ItemDetailsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(itemRoutes)
  ],exports:[ItemListComponent,ItemDetailsComponent]
})
export class ItemModule { }
