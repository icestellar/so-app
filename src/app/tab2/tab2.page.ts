import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private iab: InAppBrowser,) {

  }

  openBlank() {
    this.iab.create(`https://forms.gle/ohHSN5KXfWnuzamw6`, `_blank`);
  }


  openSystem() {
    this.iab.create(`https://forms.gle/ohHSN5KXfWnuzamw6`, `_system`);
  }

}
