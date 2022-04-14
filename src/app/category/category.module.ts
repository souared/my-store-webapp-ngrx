import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesApiEffects } from './category-api.effects';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryEditComponent,
    CategoriesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "categories", component: CategoriesPageComponent }]),
    EffectsModule.forFeature([CategoriesApiEffects])
  ]
})
export class CategoryModule { }
