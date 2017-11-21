import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: "test"
    },
    {
      id: 2,
      name: "lalala"
    }
  ]

  constructor() { 
  }

  ngOnInit() {
  }

}
