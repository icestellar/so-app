import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private iab: InAppBrowser,) {

  }

  openBlank() {
    this.iab.create(`https://forms.gle/ohHSN5KXfWnuzamw6`, `_blank`);
  }


  openSystem() {
    this.iab.create(`https://forms.gle/ohHSN5KXfWnuzamw6`, `_system`);
  }

}
