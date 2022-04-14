import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ClientsApiEffects } from './client-api-effects';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ClientsPageComponent } from './components/clients-page/clients-page.component';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientEditComponent,
    ClientsPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "clients", component: ClientsPageComponent }]),
    EffectsModule.forFeature([ClientsApiEffects])
  ]
})
export class ClientModule { }
