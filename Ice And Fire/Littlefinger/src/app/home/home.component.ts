import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from '../http-got.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books: any;
  public houses: any;
  public Characters: any;
  public total: any;
  public finalProductH: any;
  public finalProductC: any;
  public finalProductB: any;
  public finalProduct: any;
  public sortedProduct: any;
  public nullProduct: any;
  public alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  public alphabet2 = ' abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  public sortedNames: any;
  public sortedAlphabets: any;
  public GOTCarousel: any;
  public imgBarray = {};
  public showProductB: any;
  public urlPix = ['https://awoiaf.westeros.org/images/9/93/AGameOfThrones.jpg',
    'https://awoiaf.westeros.org/images/3/39/AClashOfKings.jpg',
    'https://awoiaf.westeros.org/images/2/24/AStormOfSwords.jpg',
    'https://awoiaf.westeros.org/images/a/a3/AFeastForCrows.jpg',
    'https://awoiaf.westeros.org/images/archive/7/79/20110717040941%21ADanceWithDragons.jpg',
    'https://awoiaf.westeros.org/images/5/5e/A_Knight_of_the_Seven_Kingdoms.jpg',
    'https://awoiaf.westeros.org/images/0/05/Hedgeknight.jpg',
    'https://awoiaf.westeros.org/images/1/17/TheSwornSword.jpg',
    'https://ic.pics.livejournal.com/grrm/7059164/406278/406278_900.jpg',
    'https://img00.deviantart.net/99f5/i/2013/338/6/f/the_princess_and_the_queen_book_cover_by_nateblunt-d6wqf76.jpg',
    'https://awoiaf.westeros.org/images/4/45/Rouges_novella.jpg',
    'https://awoiaf.westeros.org/images/3/35/World_of_ice_and_fire.JPG'];
  constructor(public homeService: HttpGOTService) {
  }
  ngOnInit() {
    console.log(this.homeService.pixcar());
    this.GOTCarousel = this.homeService.pixcar();
    this.homeService.httpRequestBooks().subscribe(
      data => {
        console.log(data);
        this.books = data;
        this.homeService.httpRequestHouses().subscribe(
          data1 => {
            console.log(data1);
            this.houses = data1;
            this.homeService.httpRequestCharacters().subscribe(

              data2 => {
                console.log(data2);
                this.Characters = data2;
                this.total = [...this.books, ...this.houses, ...this.Characters];
                console.log(this.total);
                this.nullProduct = this.total.filter(obj => Object.is(obj.name, ''));
                console.log(this.nullProduct);
                this.finalProductB = this.alphabet.map(main =>
                  this.books.filter(obj => Object.is(obj.name.charAt(0), main)));
                this.books.forEach((obj, i) => {
                  // tslint:disable-next-line:prefer-const

                  this.imgBarray[`${obj.name}`] = this.urlPix[i];

                });
                console.log(this.imgBarray);
                console.log(this.finalProductB);

                this.finalProductC = this.alphabet.map(main =>
                  this.Characters.filter(obj => Object.is(obj.name.charAt(0), main)));
                console.log(this.finalProductC);

                this.finalProductH = this.alphabet.map(main =>
                  this.houses.filter(obj => Object.is(obj.name.charAt(6), main)));
                console.log(this.finalProductH);

                this.finalProduct = this.finalProductB.map((obj: any, i) =>
                  obj = [...this.finalProductB[i], ...this.finalProductC[i], ...this.finalProductH[i]]);
                this.finalProduct.splice(0, 0, this.nullProduct);
                console.log(this.finalProduct);
                this.sortedProduct = this.finalProduct.filter(obj => Object.values(obj).length !== 0);
                console.log(this.sortedProduct);
                console.log(this.alphabet2);
                this.sortedAlphabets = this.alphabet2.filter((obj: any, i) =>
                  (Object.values(this.finalProduct[i]).length !== 0) ? true : false);
                console.log(this.sortedAlphabets);
                this.sortedNames = this.sortedProduct.map(obj1 =>
                  obj1.map(obj => (obj.name !== '') ? obj.name : obj.aliases[0]));
                console.log(this.sortedNames);

              },
              error2 => {
                console.log('character service terminated');


              }

            );


          },
          error1 => {
            console.log('house service terminated');

          }
        );

      },
      error => {
        console.log('book service terminated');


      }
    );
  }


}
