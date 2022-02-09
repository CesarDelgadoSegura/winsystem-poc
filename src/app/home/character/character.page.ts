import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  character: object;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.charactersService.getCharacter(params.id).then((res: any) => {
        if(res && res.data && res.data.results) {
          this.character = res.data.results[0];
        }
      });
    });
  }
}
