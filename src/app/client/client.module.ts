import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class ClientModule { }
