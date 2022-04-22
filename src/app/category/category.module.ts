import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesApiEffects } from './category-api.effects';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';



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
    EffectsModule.forFeature([CategoriesApiEffects]),
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class CategoryModule { }
