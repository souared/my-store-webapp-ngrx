import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { reducers } from "./shared/state";
import { CategoryModule } from './category';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientModule } from './client';
import { ProductModule } from './product';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from './order/order.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
    //  { path: "", pathMatch: "full", redirectTo: "/categories" },
      { path: "", pathMatch: "full", redirectTo: "/login" }
    ]),
     StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
   // StoreRouterConnectingModule.forRoot(),
   CategoryModule,
   ClientModule,
   ProductModule,
   OrderModule,
   AuthenticationModule,
   NgbModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
