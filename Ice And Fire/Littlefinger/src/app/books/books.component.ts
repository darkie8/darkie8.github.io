import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from '../http-got.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: any;
  public finalProduct: any;
  public sortedProduct: any;
  public sortedAlphabet: any;
  public alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  public sortedNames: any;
  public sortedNames1: any;
  public urlPix = [['https://awoiaf.westeros.org/images/9/93/AGameOfThrones.jpg',
    'https://awoiaf.westeros.org/images/3/39/AClashOfKings.jpg',
    'https://awoiaf.westeros.org/images/2/24/AStormOfSwords.jpg',
    'https://awoiaf.westeros.org/images/a/a3/AFeastForCrows.jpg',
    'https://awoiaf.westeros.org/images/archive/7/79/20110717040941%21ADanceWithDragons.jpg',
    'https://awoiaf.westeros.org/images/5/5e/A_Knight_of_the_Seven_Kingdoms.jpg'],
  ['https://awoiaf.westeros.org/images/0/05/Hedgeknight.jpg',
    'https://awoiaf.westeros.org/images/1/17/TheSwornSword.jpg',
    'https://ic.pics.livejournal.com/grrm/7059164/406278/406278_900.jpg',
    'https://img00.deviantart.net/99f5/i/2013/338/6/f/the_princess_and_the_queen_book_cover_by_nateblunt-d6wqf76.jpg',
    'https://awoiaf.westeros.org/images/4/45/Rouges_novella.jpg',
    'https://awoiaf.westeros.org/images/3/35/World_of_ice_and_fire.JPG']];
  public errorUrl = 'https://awoiaf.westeros.org/index.php/File:{{sortedNames1[n][i]}}.jpg';
  constructor(private httpbooks: HttpGOTService) {
    console.log('http request done');


  }

  ngOnInit() {
    this.books = this.httpbooks.httpRequestBooks().subscribe(
      data => {
        console.log(data);


        this.books = data;
        // tslint:disable-next-line:prefer-const

        // tslint:disable-next-line:prefer-const
        this.finalProduct = this.alphabet.map(main => {
          // tslint:disable-next-line:prefer-const

          return this.books.filter(obj => Object.is(obj.name.charAt(0), main));

        });
        // tslint:disable-next-line:prefer-const
        let nullProduct = this.books.filter(obj => Object.is(obj.name, ''));
        console.log(nullProduct);
        console.log(this.finalProduct);
        // tslint:disable-next-line:prefer-const
        this.finalProduct.splice(0, 0, nullProduct);
        console.log(this.finalProduct);
        this.sortedProduct = this.finalProduct.filter(obj => Object.values(obj).length !== 0);
        console.log(this.sortedProduct);
        this.sortedAlphabet = this.sortedProduct.map(obj => obj[0].name.charAt(0));
        // tslint:disable-next-line:max-line-length
        this.sortedNames = this.sortedProduct.map(obj1 => obj1.map(obj => obj.name.replace(/ /g, '_')));
        // tslint:disable-next-line:max-line-length
        this.sortedNames1 = this.sortedNames.map(obj1 => obj1.map(obj => obj.replace(/_/g, '') && (obj.indexOf('of') !== -1) ? obj.replace('of', 'Of').replace(/_/g, '') : obj.replace(/_/g, '')));
        console.log(this.sortedAlphabet);
        console.log(this.sortedNames);
        console.log(this.sortedNames1);


      },
      error => {
        console.log('some error occured');
      }
    );
  }

}
