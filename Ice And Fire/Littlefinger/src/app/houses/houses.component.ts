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
  public beta = 'A';
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
          let frstLtr = x.name.charAt(6);
          console.log(frstLtr);
        }

        // tslint:disable-next-line:prefer-const
        let finalProduct = this.houses.filter(obj => {

        })



      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );



    // tslint:disable-next-line:triple-equals
    if ($('.cardB').height() <= 10) {
      $('.cardB').css({ 'height': '0px', 'width': '0px' });
    }

    console.log(this.alphabet);






  }
}
