import { Component } from '@angular/core';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private globalization: Globalization) {
    this.globalization.getPreferredLanguage()
    .then(res => console.log(res))
    .catch(e => console.log(e));
  }
}
