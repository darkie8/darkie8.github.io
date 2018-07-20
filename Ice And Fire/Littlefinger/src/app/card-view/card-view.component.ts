import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from '../http-got.service';
import { Router, ActivatedRoute } from '@angular/router';
import { zip, of } from '../../../node_modules/rxjs';
import { delay } from '../../../node_modules/rxjs/operators';
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  public mainObject: any;
  public type: any;
  public id: any;
  public mainObjectKeys: any;
  public mainObjectValues: any;
  previouUrl: any;
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
  constructor(private routeEnd: ActivatedRoute, private router: Router,
    private individualContent: HttpGOTService) {
     }


  ngOnInit() {
    this.previouUrl = this.individualContent.getPreviousUrl();
    console.log(this.individualContent.getHistory());
    console.log(this.individualContent.getPreviousUrl());
    this.id = this.routeEnd.snapshot.paramMap.get('id');
    this.type = this.routeEnd.snapshot.paramMap.get('type');
    console.log(`https://www.anapioficeandfire.com/api/${this.type}/${this.id}`);
    this.individualContent.individualAccesor(this.type, this.id).subscribe(
      data => {
        console.log(data);
        this.mainObject = data;
        this.mainObjectKeys = Object.keys(this.mainObject);
        this.mainObjectKeys.splice(0, 1);
        console.log(this.mainObjectKeys);
        this.mainObjectValues = Object.values(this.mainObject);
        this.mainObjectValues.splice(0, 1);
        // tslint:disable-next-line:prefer-const
        let sigma = (need) => {
          // tslint:disable-next-line:prefer-const
          let ui = (Array.isArray(need)) ? need : [need];
          zip(...ui.map(obj =>
            this.individualContent.tableComponent(obj))).subscribe(
              data1 => {
                // tslint:disable-next-line:prefer-const
                let su = data1.map((obj: any) => obj.name);
                this.mainObjectValues.splice(this.mainObjectValues.indexOf(need), 1, su);
                console.log(this.mainObjectValues);
              },
              error => {
                console.log('error fetching');

              }
            );
        };
        sigma(this.mainObject.swornMembers);
        sigma(this.mainObject.cadetBranches);
        sigma(this.mainObject.currentLord);
        sigma(this.mainObject.heir);
        sigma(this.mainObject.overlord);
        sigma(this.mainObject.founder);
        sigma(this.mainObject.allegiances);
        sigma(this.mainObject.books);
        sigma(this.mainObject.father);
        sigma(this.mainObject.mother);
        sigma(this.mainObject.povBooks);
        sigma(this.mainObject.povCharacters);
        sigma(this.mainObject.characters);
      },
      error => {
        console.log('error accessing');
      }
    );

  }

}
