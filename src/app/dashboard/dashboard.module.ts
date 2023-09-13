import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { ArtikelListComponent } from './artikel-list/artikel-list.component';
import { ArtikelLatestComponent } from './artikel-latest/artikel-latest.component';
@NgModule({
  declarations: [
    MainComponent,
    HeroComponent,
    ArtikelListComponent,
    ArtikelLatestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,SharedModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class DashboardModule {}
