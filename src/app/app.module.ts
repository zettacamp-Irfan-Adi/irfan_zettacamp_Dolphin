import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{SharedModule}from './shared/shared.module';
import{ItemModule}from './item/item.module';
import{FormModule}from './form/form.module';
import { RouterModule, Routes } from '@angular/router';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ItemModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const appRoutes:Routes =
[
{
  path:'item',
  loadChildren:()=>
    import('./item/item.module').then((page)=>page.ItemModule),
},
{
  path:'form',
  loadChildren:()=>
    import('./form/form.module').then((page)=>page.FormModule),
},
{path: '', redirectTo: 'item', pathMatch: 'full' },
{path: 'not-found',component:PageNotFoundComponent},
{path: '**',redirectTo:'/not-found'}
]
