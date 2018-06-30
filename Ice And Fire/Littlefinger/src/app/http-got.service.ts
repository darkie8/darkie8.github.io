import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class HttpGOTService {
  public GOTCarousel = [
    // tslint:disable-next-line:max-line-length
    { desc: ' Welcome to the World Of GOT', pix: 'https://www.tatacliq.com/que/wp-content/uploads/2017/08/film-scores-as-epic-as-got-main-theme-featured.jpg', class: 'carousel-item px-4 active' },
    // tslint:disable-next-line:max-line-length
    { desc: 'And A Song of Ice and Fire', pix: 'http://wikiofthrones.com/static/uploads/2016/09/book_covers_ipadpro10-pf-spgray_v1.jpg', class: 'carousel-item px-3' },
    // tslint:disable-next-line:max-line-length
    { desc: ' Welcome to the World Of GOT', pix: 'https://i.pinimg.com/originals/b0/d4/7c/b0d47c4f83b39622c58168d11abf05bb.jpg', class: 'carousel-item px-3' },
    { desc: 'And A Song of Ice and Fire', pix: 'https://i.imgur.com/YS0RAhc.jpg', class: 'carousel-item px-3' },
    // tslint:disable-next-line:max-line-length
    { desc: 'You Know Nothing, Jon Snow', pix: 'https://www.pinnacle.com/Cms_Data/Contents/Guest/Media/betting-articles/feature/game-of-thrones-hero.jpg', class: 'carousel-item px-3' },
    // tslint:disable-next-line:max-line-length
    { desc: 'And A Song of Ice and Fire', pix: 'http://i.imgur.com/TDjiA9e.png', class: 'carousel-item px-3' },
    // tslint:disable-next-line:max-line-length
    { desc: 'And A Song of Ice and Fire', pix: 'https://www.desktop-background.com/download/o/2012/04/07/370917_a-song-of-ice-and-fire-wallpapers-by-conkoon-on-deviantart_1920x1080_h.png', class: 'carousel-item px-3' }
  ];
  private baseUrl = 'https://www.anapioficeandfire.com/api';
  private parm1 = 'books';
  private parm2 = 'characters';
  private parm3 = 'houses';
  public beta: any[];
  constructor(private httpClient: HttpClient) {
  }
  public pixcar() {
    return this.GOTCarousel;
  }
  /**
   * httpRequestBooks
   */
  public httpRequestBooks() {
    return this.httpClient.get(this.baseUrl + '/' + this.parm1);
  }
  /**
   * httpRequestCharacters
   */
  public httpRequestCharacters() {
    return this.httpClient.get(this.baseUrl + '/' + this.parm2);

  }
  /**
   * httpRequestHouses
   */
  public httpRequestHouses() {
    return this.httpClient.get(this.baseUrl + '/' + this.parm3);
  }
  /**
   * checkPix
   */
  public checkPix(houseName) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(`https://awoiaf.westeros.org/thumb.php?f=${houseName}.svg&width=545&lang=en`, { responseType: 'blob' });
  }
  /**
   * imgFix
   */
  public imgFix() {
    for (let i = 0; i <= 9; i++) {
      // tslint:disable-next-line:prefer-const
      let h = ($(`img #id${i}`).width() === 0 && $(`img #id${i}`).height() === 0) ? 'wrong' : 'right';

      return this.beta.push(h);
    }

  }
}
