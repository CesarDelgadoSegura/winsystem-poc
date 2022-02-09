import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPageRoutingModule } from './character-routing.module';

import { CharacterPage } from './character.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterPageRoutingModule,
    TranslateModule
  ],
  declarations: [CharacterPage]
})
export class CharacterPageModule {}
