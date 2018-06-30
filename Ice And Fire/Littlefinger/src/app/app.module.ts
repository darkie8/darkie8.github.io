import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// font-awesome imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// http request
import { HttpClientModule, HttpClient } from '@angular/common/http';

// http loader spinner
import { NgHttpLoaderModule } from 'ng-http-loader';

// routing in between pages
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { HttpGOTService } from './http-got.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HousesComponent,
    CharactersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgHttpLoaderModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'houses', component: HousesComponent },
      { path: 'books', component: BooksComponent },
      { path: 'characters', component: CharactersComponent }

    ])
  ],
  providers: [HttpClientModule, HttpGOTService],
  bootstrap: [AppComponent],
})
export class AppModule { }
