import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const formRoutes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'form/edit/:id', component: FormComponent },
];


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule.forChild(formRoutes)
  ],exports:[
    FormComponent
  ]
})
export class FormModule { }
