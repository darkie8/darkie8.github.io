import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  ngOnInit() {


  }

}
