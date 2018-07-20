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
  }
  public name = '';
  public fromReleaseDate: any;
  public toReleaseDate: any;
  nameh: any;
  region: any;
  words: any;
  hasWords: any;
  hasTitles: any;
  hasSeats: any;
  hasDiedOut: any;
  hasAncestralWeapons: any;
  type = 'books';
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
    const house = {
      name: this.nameh,
      region: this.region,
      words: this.words,
      hasWords: this.hasWords,
      hasTitles: this.hasTitles,
      hasSeats: this.hasSeats,
      hasDiedOut: this.hasDiedOut,
      hasAncestralWeapons: this.hasAncestralWeapons
    };
    this.appService.filterMethod('houses', `name=${house.name}&region=${house.region}&words=${house.words}
    &hasWords=${house.hasWords}&hastitles=${house.hasTitles}&hasSeats=${house.hasSeats}&hasDiedout=${house.hasDiedOut}
    &hasAncestralWeapons=${house.hasAncestralWeapons}`).subscribe(
      data => {
        console.log(data);
        this.showProductH = data;
      },
      error => {
        console.log('error');

      }
      );
  }
  ngOnInit() {

  }

}
