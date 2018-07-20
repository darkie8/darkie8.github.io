import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/zip';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';
import { filter } from '../../node_modules/rxjs/operators';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class HttpGOTService {
  public GOTCarousel = [
    // tslint:disable-next-line:max-line-length
    { desc: ' Welcome to the World Of GOT', pix: 'https://www.tatacliq.com/que/wp-content/uploads/2017/08/film-scores-as-epic-as-got-main-theme-featured.jpg', class: 'carousel-item px-2 active' },
    // tslint:disable-next-line:max-line-length
    { desc: 'And A Song of Ice and Fire', pix: 'http://wikiofthrones.com/static/uploads/2016/09/book_covers_ipadpro10-pf-spgray_v1.jpg', class: 'carousel-item px-2' },
    // tslint:disable-next-line:max-line-length
    { desc: ' Welcome to the World Of GOT', pix: 'https://i.pinimg.com/originals/b0/d4/7c/b0d47c4f83b39622c58168d11abf05bb.jpg', class: 'carousel-item px-2' },
    { desc: 'And A Song of Ice and Fire', pix: 'https://i.imgur.com/YS0RAhc.jpg', class: 'carousel-item px-2' },
    // tslint:disable-next-line:max-line-length
    { desc: 'You Know Nothing, Jon Snow', pix: 'https://www.dailydot.com/wp-content/uploads/b7e/95/6e3cab9d4222c6cdc1fab528e9863730.jpg', class: 'carousel-item px-2' },
    // tslint:disable-next-line:max-line-length
    { desc: 'And A Song of Ice and Fire', pix: 'http://wikiofthrones.com/static/uploads/2017/01/Westeros.jpg', class: 'carousel-item px-2' },
    // tslint:disable-next-line:max-line-length
    { desc: 'And A Song of Ice and Fire', pix: 'http://i.imgur.com/N7djS6X.jpg', class: 'carousel-item px-2' }
  ];
  private baseUrl = 'https://www.anapioficeandfire.com/api';
  private parm1 = 'books';
  private parm2 = 'characters';
  private parm3 = 'houses';
  private baseUrl1 = 'https://api.got.show/api/';
  public beta: any;
  private history = [];
  constructor(private httpClient: HttpClient, private router: Router) {
  }
  public pixcar() {
    return this.GOTCarousel;
  }
  /**
   * httpRequestBooks
   */
  public httpRequestBooks() {
    return this.httpClient.get(this.baseUrl + '/' + this.parm1, { responseType: 'json' });
  }
  /**
   * httpRequestCharacters
   */
  public httpRequestCharacters() {
    return this.httpClient.get(this.baseUrl + '/' + this.parm2, { responseType: 'json' });

  }
  /**
   * httpRequestHouses
   */
  public httpRequestHouses() {
    return this.httpClient.get(this.baseUrl + '/' + this.parm3, { responseType: 'json' });
  }

  /**
   * characterpix
   */
  public characterpix(name) {
    return this.httpClient.get(this.baseUrl1 + this.parm2 + '/' + name, { responseType: 'json' });
  }
  /**
   * individualAccesor
   */
  public individualAccesor(type, id) {
    return this.httpClient.get(`https://www.anapioficeandfire.com/api/${type}/${id}`, { responseType: 'json' });
  }
  /**
   * filterMethod
   */
  public filterMethod(type, id) {
    return this.httpClient.get(`https://www.anapioficeandfire.com/api/${type}?${id}`, { responseType: 'json' });
  }
  /**
   * tableComponent
   */
  public tableComponent(url) {
    return this.httpClient.get(url, { responseType: 'json' });
  }

  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        this.history = [...this.history, urlAfterRedirects];
      });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getPreviousUrl(): string {
    return this.history[this.history.length - 2] || '/home';
  }
}
