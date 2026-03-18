import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  formField: FormGroup;

  constructor(private service: CategoryService) {
    this.formField = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      description: new FormControl('', Validators.required),
    });
  }

  save() {
    this.formField.markAllAsTouched();

    if (this.formField.valid) {
      this.service.save(this.formField.value).subscribe({
        next: (category) => {
          console.log('Saved successful!', category);
          this.formField.reset();
        },
        error: (erro) => console.error('Occurred an Error ', erro),
      });
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.formField.get(fieldName);
    return field?.invalid && field.touched && field?.errors?.['required'];
  }
}
