import { Component, OnInit } from '@angular/core';
import { routes } from '../routes';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="row">
      <div class="col-md-10">
        <a [routerLink]="['movies']" >Mini-netflix</a>
      </div>
      <a href="javascript:void(0);" class="icon" onClick="showIcon()"><i class="fa fa-bars"></i></a>
      <div class="col-md-2" id="navLinks">
        <a [routerLink]="['movies']" routerLinkActive="active">Home</a>
        <a [routerLink]="['favorites']" routerLinkActive="active">Favorites</a>
      </div>
    </nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

function showIcon() {
  const x = document.getElementById('navLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
