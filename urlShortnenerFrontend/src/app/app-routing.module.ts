import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';

const routes: Routes = [
  {
    path: '',component:AppComponent,
    children: [
      { path: '', component: UrlShortenerComponent},
      { path: 'error-page', component: ErrorPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
