import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>("https://gist.githubusercontent.com/Adri-7/b93469432e97c6cc0d407914f7dbe7a0/raw/2967ad6511013d8dbfb94e9cfdc39eb378f91303/pokemon.json");
  }

}
