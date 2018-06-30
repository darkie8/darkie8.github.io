import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from '../http-got.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: any;
  constructor(private httpbooks: HttpGOTService) {
    console.log('http request done');


  }

  ngOnInit() {
    this.books = this.httpbooks.httpRequestBooks().subscribe(
      data => {
        console.log(data);
        this.books = data['data'];

      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
    console.log(this.books);
  }

}
