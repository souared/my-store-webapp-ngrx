import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationPageComponent } from './components/authentication-page/authentication-page.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { UserAuthenticationsApiEffects } from './authentication-api-effects';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthenticationPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "login", component: AuthenticationPageComponent }]),
    EffectsModule.forFeature([UserAuthenticationsApiEffects]),
    MatButtonModule,
  ]
})
export class AuthenticationModule { }
