import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { UrlShortenerTabelComponent } from './url-shortener-tabel/url-shortener-tabel.component';
import { UrlShortenerComponent } from './url-shortener.component';
import { UrlShortenerFormComponent } from './url-shortener-form/url-shortener-form.component';

@NgModule({
  declarations: [
    UrlShortenerComponent,
    UrlShortenerTabelComponent,
    UrlShortenerFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [UrlShortenerComponent]
})
export class UrlShortenerModule { }
