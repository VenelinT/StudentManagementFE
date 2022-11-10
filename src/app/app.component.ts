import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   
  }
  prepareRoute(outlet:RouterOutlet){
    return outlet &&outlet.activatedRouteData &&outlet.activatedRouteData['animation'];
  }
}
