import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ManageService } from '../../shared/manage.service';
import { Router ,ActivatedRoute, Route} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private manageservice: ManageService,
    private route: ActivatedRoute,
    private routes:Router
  ) {}


  carForm = this.fb.group({
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: ['', Validators.required],
    brand: ['', Validators.required],
    stock: [0, Validators.required],
    price: [0, Validators.required],
    year: [0, Validators.required],
    color: ['', Validators.required],
    img: ['', Validators.required],
    owner: this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    }),
  });
  itemsData:any
  ngOnInit(): void {
    const cardId = this.route.snapshot.params['id'];
    let card = parseInt(cardId);
    this.itemsData = this.manageservice.getCarById(card);
    this.carForm.patchValue(this.itemsData);
    console.log(this.itemsData);
  }
  addData() {
    if (this.carForm.valid) {
      const newCar = this.carForm.value;
      if (this.itemsData) {
        this.manageservice.updateCar(this.itemsData.id, newCar);
      } else {
        this.manageservice.addCar(newCar);
      }
      this.routes.navigate(['']); // Navigate to the home page after adding or updating the car
    }
  }
}
