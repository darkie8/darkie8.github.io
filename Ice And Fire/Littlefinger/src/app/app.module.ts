import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// font-awesome imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// http request
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

// interceptor to access CORS
import { MyHttpInterceptor } from './my-http-interceptor';

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
import { CardViewComponent } from './card-view/card-view.component';
import { FormsModule } from '@angular/forms';

// scroll
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HousesComponent,
    CharactersComponent,
    HomeComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgHttpLoaderModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'houses', component: HousesComponent },
      { path: 'books', component: BooksComponent },
      { path: 'characters', component: CharactersComponent },
      { path: 'element/:type/:id', component: CardViewComponent }
    ]),
    GoTopButtonModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule, HttpGOTService, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
