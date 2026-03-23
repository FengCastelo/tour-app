import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Place } from '../../places/Place';
import { Category } from '../../categories/category';
import { PlaceService } from '../../places/place.service';
import { CategoryService } from '../../categories/category.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  places: Place[] = [];
  categoriesFilter: Category[] = [];
  nameFilter: string = '';
  categoryFilter: string = '';

  constructor(
    private placeService: PlaceService,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.categoryService
      .findAll()
      .subscribe((categories) => (this.categoriesFilter = categories));

    this.placeService
      .findAll()
      .subscribe((placesResponse) => (this.places = placesResponse));
  }

  getTotalStars(place: Place) {
    return (
      '&#9733;'.repeat(place.rating || 0) +
      '&#10032;'.repeat(5 - (place.rating || 0))
    );
  }

  filter() {
    console.log('Values:', this.nameFilter, this.categoryFilter);

    this.placeService
      .filter(this.nameFilter, this.categoryFilter)
      .subscribe((result) => (this.places = result));
  }
}
