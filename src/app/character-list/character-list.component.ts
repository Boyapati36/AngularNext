import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../RickAndMorty.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters : Character[] = [];

  constructor(private RickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.RickAndMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}
