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
  public sortedalphabets: any;
  public GOTCarousel: any;
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
                this.sortedalphabets = this.alphabet2.filter((obj: any, i) =>
                  (Object.values(this.finalProduct[i]).length !== 0) ? true : false);
                console.log(this.sortedalphabets);
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
