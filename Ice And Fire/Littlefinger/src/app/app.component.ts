import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from './http-got.service';

declare var $: any;
$('.spec').click(() => {
  $('#exampleModalLong1').modal('hide');
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public showProductB: any;
  public showProductH: any;
  public showProductC: any;
  public namesOfCharacters: any;
  public urlPix = ['https://awoiaf.westeros.org/images/9/93/AGameOfThrones.jpg',
    'https://awoiaf.westeros.org/images/3/39/AClashOfKings.jpg',
    'https://awoiaf.westeros.org/images/2/24/AStormOfSwords.jpg',
    'https://awoiaf.westeros.org/images/a/a3/AFeastForCrows.jpg',
    'https://awoiaf.westeros.org/images/0/05/Hedgeknight.jpg',
    'https://awoiaf.westeros.org/images/1/17/TheSwornSword.jpg',
    'https://ic.pics.livejournal.com/grrm/7059164/406278/406278_900.jpg',
    'https://awoiaf.westeros.org/images/archive/7/79/20110717040941%21ADanceWithDragons.jpg',
    'https://img00.deviantart.net/99f5/i/2013/338/6/f/the_princess_and_the_queen_book_cover_by_nateblunt-d6wqf76.jpg',
    'https://awoiaf.westeros.org/images/4/45/Rouges_novella.jpg',
    'https://awoiaf.westeros.org/images/3/35/World_of_ice_and_fire.JPG',
    'https://awoiaf.westeros.org/images/5/5e/A_Knight_of_the_Seven_Kingdoms.jpg'];
  constructor(public appService: HttpGOTService) {
    appService.loadRouting();
  }
  public name = '';
  public fromReleaseDate = '';
  public toReleaseDate = '';
  public nameh = '';
  public region = '';
  public words = '';
  public hasWords = '';
  public hasTitles = '';
  public hasSeats = '';
  public hasDiedOut = '';
  public hasAncestralWeapons = '';
  namec = '';
  gender = '';
  culture = '';
  born = '';
  died = '';
  isAlive = '';
  type = 'books';
  type1 = 'houses';
  type2 = 'characters';
  /**
   * getIt
   */
  public getIt() {
    const name = this.name;
    const fromReleaseDate = this.fromReleaseDate;
    const toReleaseDate = this.toReleaseDate;
    // tslint:disable-next-line:max-line-length
    this.appService.filterMethod(this.type, `name=${name}&fromReleaseDate=${fromReleaseDate}&toReleaseDate=${toReleaseDate}`).subscribe(
      data => {
        console.log(data);
        this.showProductB = data;
      },
      error => {
        console.log('error');

      }
    );
  }
  /**
   * getIt1
   */
  public getIt1() {

    const nameh = this.nameh;
    const region = this.region;
    const words = this.words;
    const hasWords = this.hasWords;
    const hasTitles = this.hasTitles;
    const hasSeats = this.hasSeats;
    const hasDiedOut = this.hasDiedOut;
    const hasAncestralWeapons = this.hasAncestralWeapons;
    const omega = `name=${nameh}&region=${region}&words=${words}
    &hasWords=${hasWords}&hastitles=${hasTitles}&hasSeats=${hasSeats}&hasDiedout=${hasDiedOut}
    &hasAncestralWeapons=${hasAncestralWeapons}`;
    this.appService.filterMethod(this.type1, omega).subscribe(
      data => {
        console.log(data);
        this.showProductH = data;
      },
      error => {
        console.log('error');

      }
    );
  }
  public getIt2() {
    const namec = this.namec;
    const gender = this.gender;
    const culture = this.culture;
    const born = this.born;
    const died = this.died;
    const isAlive = this.isAlive;
    const omega1 = `name=${namec}&gender=${gender}&born=${born}
    &died=${died}&culture=${culture}&isAlive=${isAlive}`;
    this.appService.filterMethod(this.type2, omega1).subscribe(
      data => {
        console.log(data);
        this.showProductC = data;
        console.log(this.showProductC);
        this.namesOfCharacters = this.showProductC.map(obj => (obj.name !== '') ? obj.name : obj.aliases[0]);
        console.log(this.namesOfCharacters);
      },
      error => {
        console.log('error');

      }
    );
  }
  ngOnInit() {
    $('#exampleModalCenter').modal('show');
  }

}
