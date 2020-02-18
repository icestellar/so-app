import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-brincadeira',
  templateUrl: './brincadeira.page.html',
  styleUrls: ['./brincadeira.page.scss'],
})
export class BrincadeiraPage implements OnInit {

  constructor(private iab: InAppBrowser,) {

  }

  openBlank() {
    this.iab.create(`https://forms.gle/ohHSN5KXfWnuzamw6`, `_blank`);
  }


  openSystem() {
    this.iab.create(`https://forms.gle/ohHSN5KXfWnuzamw6`, `_system`);
  }

  ngOnInit() {
  }

}
