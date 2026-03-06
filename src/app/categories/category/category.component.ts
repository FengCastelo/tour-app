import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  formField: FormGroup;
  
  constructor() {
    this.formField = new FormGroup({
       name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
       description: new FormControl('', Validators.required)
      });
  }

  save() {
    this.formField.markAllAsTouched();

    if(this.formField.valid) {
        console.log('data: ', this.formField.value);
    }
  }

  isFieldInvalid(fieldName: string) : boolean {
    const field = this.formField.get(fieldName);
    return field?.invalid && field.touched && field?.errors?.['required'];

  }
}
