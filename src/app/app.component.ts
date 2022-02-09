import { Component } from '@angular/core';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private globalization: Globalization, private translateService: TranslateService) {
    this.globalization.getPreferredLanguage()
    .then(res => {
      const lang = res.value.indexOf('es-') === -1 ? 'english': 'spanish';
      this.translateService.setDefaultLang(lang);
    })
    .catch(e => console.log(e));
  }
}
