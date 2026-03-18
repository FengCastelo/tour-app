import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place',
  standalone: false,
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss',
})
export class PlaceComponent implements OnInit {
  formField: FormGroup;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private service: PlaceService,
  ) {
    this.formField = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      category: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      urlPhoto: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe({
      next: (categoriesList) => (this.categories = categoriesList),
      error: (erro) => console.error('Error: ', erro),
    });
  }

  save() {
    this.formField.markAllAsTouched();

    if (this.formField.valid) {
      this.service.save(this.formField.value).subscribe({
        next: (place) => {
          console.log('Registered Successfuly', place);
          this.formField.reset();
        },
        error: (erro) => console.error('Occurred an Error ', erro),
      });
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.formField.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
}
