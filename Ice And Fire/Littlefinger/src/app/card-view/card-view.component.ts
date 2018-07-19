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
  public houses: any;
  public characters: any;
  public swornMembers = [];
  public houseKeys: any;
  public houseValues: any;
  public overLord: any;
  constructor(private routeEnd: ActivatedRoute, private router: Router,
    private individualContent: HttpGOTService) { }


  ngOnInit() {
    const id = this.routeEnd.snapshot.paramMap.get('id');
    const type = this.routeEnd.snapshot.paramMap.get('type');
    console.log(`https://www.anapioficeandfire.com/api/${type}/${id}`);
    this.individualContent.individualAccesor(type, id).subscribe(
      data => {
        console.log(data);
        this.houses = data;
        this.houseKeys = Object.keys(this.houses);
        this.houseKeys.splice(0, 1);
        console.log(this.houseKeys);
        this.houseValues = Object.values(this.houses);
        this.houseValues.splice(0, 1);
        // tslint:disable-next-line:prefer-const
        let sigma = (need) => {
          // tslint:disable-next-line:prefer-const
          let ui = (Array.isArray(need)) ? need : [need];
          zip(...ui.map(obj =>
            this.individualContent.tableComponent(obj))).subscribe(
              data1 => {
                // tslint:disable-next-line:prefer-const
                let su = data1.map((obj: any) => obj.name);
                this.houseValues.splice(this.houseValues.indexOf(need), 1, su);
                console.log(this.houseValues);
              },
              error => {
                console.log('error fetching');

              }
            );
        };
        sigma(this.houses.swornMembers);
        sigma(this.houses.cadetBranches);
        sigma(this.houses.currentLord);
        sigma(this.houses.heir);
        sigma(this.houses.overlord);
        sigma(this.houses.founder);
        sigma(this.houses.allegiances);
        sigma(this.houses.books);
        sigma(this.houses.father);
        sigma(this.houses.mother);
        sigma(this.houses.povBooks);
        sigma(this.houses.povCharacters);
        sigma(this.houses.characters);
      },
      error => {
        console.log('error accessing');
      }
    );

  }

}
