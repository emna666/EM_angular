import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '@shared/components/nav/nav.component';
import { AboutComponent } from '@modules/about/about.component';
import { ContactComponent } from '@modules/contact/contact.component';
import { HomeComponent } from '@modules/home/home.component';
import {HomeBlockComponent} from "@modules/home/home-block/home-block.component";
import { HomeSingleComponent} from "@modules/home/home-single/home-single.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HomeBlockComponent,
    HomeSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
