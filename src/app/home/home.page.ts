import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  characters: [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.get().then((res: any) => {
      if(res && res.data && res.data.results) {
        this.characters = res.data.results.map(map => map);
      }
    });
  }
}
