import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from '../http-got.service';
declare var $: any;
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public houses: any;
  public finalProduct: any;
  public sortedProduct: any;
  public sortedAlphabet: any;
  public alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  constructor(private httpHouse: HttpGOTService) {
    console.log('http request done');


  }
  /*check(name) {
    // tslint:disable-next-line:prefer-const
    $.ajax(
      {
        type: 'GET',
        async: false,
        url: `https://awoiaf.westeros.org/thumb.php?f=${name}.svg&width=600&lang=en`,
        success: (r) => {
          this.beta.splice(0, 0, true);

        },
        error: (e) => {
          this.beta.splice(0, 0, false);

        }
      }
    );
    return this.beta;

  }*/

  ngOnInit() {


    console.log($('.namePix0').text());


    this.httpHouse.httpRequestHouses().subscribe(
      data => {
        console.log(data);

        this.houses = data;
        // tslint:disable-next-line:prefer-const
        for (let x of this.houses) {
          // tslint:disable-next-line:prefer-const
          let frstLtr = x.name.charAt(6);
          console.log(frstLtr);
        }

        // tslint:disable-next-line:prefer-const
        this.finalProduct = this.alphabet.map(main => {
          // tslint:disable-next-line:prefer-const

          return this.houses.filter(obj => Object.is(obj.name.charAt(6), main));

        });
        console.log(this.finalProduct);
        console.log(Object.values(this.finalProduct[0]));

        this.sortedProduct = this.finalProduct.filter(obj => Object.values(obj).length !== 0);
        console.log(this.sortedProduct);
        this.sortedAlphabet = this.sortedProduct.map(obj => obj[0].name.charAt(6));
        console.log(this.sortedAlphabet);



      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );





    console.log(this.alphabet);






  }
}
