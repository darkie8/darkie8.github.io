import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from '../http-got.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  constructor(private routeEnd: ActivatedRoute, private router: Router,
    private individualContent: HttpGOTService) { }


  ngOnInit() {
    const id = this.routeEnd.snapshot.paramMap.get('id');
    const type = this.routeEnd.snapshot.paramMap.get('type');
    console.log(`https://www.anapioficeandfire.com/api/${type}/${id}`);
    this.individualContent.individualAccesor(type, id).subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log('error accessing');
      }
    );

  }

}
