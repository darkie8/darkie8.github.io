import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from '../http-got.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public finalProduct: any;
  public sortedProduct: any;
  public sortedAlphabet: any;
  public alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  public sortedNames: any;
  public Characters: any;
  noReapeatingSortedProduct: any;
  constructor(private httpCharacter: HttpGOTService) {
    console.log('http request done');


  }

  ngOnInit() {
    console.log(this.alphabet);

    this.httpCharacter.httpRequestCharacters().subscribe(
      data => {
        console.log(data);


        this.Characters = data;
        // tslint:disable-next-line:prefer-const

        // tslint:disable-next-line:prefer-const
        this.finalProduct = this.alphabet.map(main => {
          // tslint:disable-next-line:prefer-const

          return this.Characters.filter(obj => Object.is(obj.name.charAt(0), main));

        });
        // tslint:disable-next-line:prefer-const
        let nullProduct = this.Characters.filter(obj => Object.is(obj.name, ''));
        console.log(nullProduct);
        console.log(this.finalProduct);
        // tslint:disable-next-line:prefer-const
        this.finalProduct.splice(0, 0, nullProduct);
        console.log(this.finalProduct);
        this.sortedProduct = this.finalProduct.filter(obj => Object.values(obj).length !== 0);
        console.log(this.sortedProduct);
        this.sortedAlphabet = this.sortedProduct.map(obj => obj[0].name.charAt(0));
        // tslint:disable-next-line:max-line-length
        this.sortedNames = this.sortedProduct.map(obj1 => obj1.map(obj => (obj.name !== '') ? obj.name : obj.aliases[0]));
        console.log(this.sortedAlphabet);
        console.log(this.sortedNames);


      },
      error => {
        console.log('some error occured');
      }
    );

  }

}
