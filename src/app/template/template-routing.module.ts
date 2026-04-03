import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CategoriesModule } from '../categories/categories.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () =>
          import('../categories/categories.module').then(
            (m) => m.CategoriesModule,
          ),
        pathMatch: 'full',
        data: { title: 'Categories', subTitle: 'Register new categories' },
      },
      {
        path: 'places',
        loadChildren: () =>
          import('../places/places.module').then((p) => p.PlacesModule),
        pathMatch: 'full',
        data: { title: 'Places', subTitle: 'Register new locations' },
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('../gallery/gallery.module').then((m) => m.GalleryModule),
        pathMatch: 'full',
        data: {
          title: 'Places For you',
          subTitle:
            'Search for the best places to enjoy and have fun! ',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
