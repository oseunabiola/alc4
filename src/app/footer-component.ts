import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="row">
      <small class="copyright">&copy; Mini-netflix, 2019</small>
    </footer>
  `,
  styles: [`
    footer {
      color: #D22;
      margin-top: 3%;
    }
    .copyright {
      margin: 0 auto;
      padding-bottom: 10px;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
