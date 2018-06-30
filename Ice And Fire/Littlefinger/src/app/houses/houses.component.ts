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
  constructor(private httpHouse: HttpGOTService) {
    console.log('http request done');


  }

  ngOnInit() {

    $.ajax(
      {
        type: 'GET',
        async: true,
        url: 'https://awoiaf.westeros.org/thumb.php?f=House_Baratheon.svg&width=545&lang=en',
        dataType: 'html',
        success: (r) => {
          console.log('done');

        },
        error: (e) => {
          console.log('error');

        }
      }
    );

    this.httpHouse.httpRequestHouses().subscribe(
      data => {
        console.log(data);

        this.houses = data;

      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
    this.httpHouse.checkPix().subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error.errorMessage);
        console.log('no pix');


      }
    );
   this.httpHouse.imgFix();

  }

}
