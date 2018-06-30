import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from '../http-got.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public Characters: any;
  constructor(private httpCharacter: HttpGOTService) {
    console.log('http request done');


  }

  ngOnInit() {
    this.Characters = this.httpCharacter.httpRequestCharacters().subscribe(
      data => {
        console.log(data);
        this.Characters = data['data'];

      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
    console.log(this.Characters);
  }

}
