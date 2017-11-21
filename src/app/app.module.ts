import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { SearchComponent } from './search/search.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { HttpClient } from '@angular/common/http/src/client';


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    SearchComponent,
    PokemonComponent,
    ListPokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
