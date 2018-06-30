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
  public beta: any;
  constructor(private httpHouse: HttpGOTService) {
    console.log('http request done');


  }

  ngOnInit() {

    $.ajax(
      {
        type: 'GET',
        async: true,
        url: 'https://awoiaf.westeros.org/thumb.php?f=House_Baratheon.svg&width=600&lang=en',
        success: (r) => {
          console.log('done');

        },
        error: (e) => {
          console.log('error');

        }
      }
    );
    console.log($('.namePix0').text());


    this.httpHouse.httpRequestHouses().subscribe(
      data => {
        console.log(data);

        this.houses = data;
        const h = $(`ng-template`).html();
        console.log(h);

      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
    this.httpHouse.checkPix('House_Baelish').subscribe(
      data => {
        console.log('done');
        this.beta = data;
        console.log(this.beta);
        console.log($('.namePix0').text());
        return true;

      },
      error => {
        console.log(error.errorMessage);
        console.log('no pix');
        return false;


      }
    );

    // tslint:disable-next-line:prefer-const






  }
}
