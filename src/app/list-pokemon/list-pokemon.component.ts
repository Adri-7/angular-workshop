import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
  providers: [PokemonService]
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  @Input() filter: string;

  constructor(private pokemonService : PokemonService) { 
  }

  ngOnInit() {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }
}
