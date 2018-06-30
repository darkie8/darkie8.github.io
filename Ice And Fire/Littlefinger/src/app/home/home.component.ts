import { Component, OnInit } from '@angular/core';
import { HttpGOTService } from '../http-got.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public GOTCarousel: any;
  constructor(public pixService: HttpGOTService) {
   }

  ngOnInit() {
     console.log(this.pixService.pixcar());
     return this.GOTCarousel = this.pixService.pixcar();
  }


}
