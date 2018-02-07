import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WorkshopModule } from '../app/workshop/workshop.module';
import { AuthModule } from '../app/auth/auth.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './menu/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    WorkshopModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
