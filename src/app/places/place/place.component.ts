import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../categories/category';

@Component({
  selector: 'app-place',
  standalone: false,
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  formField: FormGroup;
  categories: Category[] = [];

  constructor() {
    this.formField = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      urlPhoto: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required)
    });
  }

  save() {
    console.log('Values: ', this.formField.value);
  }
}
