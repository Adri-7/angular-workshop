import { Pipe, PipeTransform } from '@angular/core';

import { Pokemon } from './pokemon';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], filter?: string): Pokemon[] {
    if(!pokemons) return [];
    if(!filter) return pokemons;

    return pokemons.filter((pokemon : Pokemon) => pokemon.name.toLowerCase().includes(filter.toLowerCase()));
  }

}
