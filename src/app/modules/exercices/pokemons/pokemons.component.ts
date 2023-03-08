import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { pokemon } from 'src/app/shared/models/pokemon';
import { PokeService } from 'src/app/shared/services/poke/poke.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent{

  pokeId! : number;

  monPokemon! : pokemon;
  hasPokemon : boolean = false;

  errorMessage : string = '';

  constructor(private _pokeService : PokeService){

  }

  find(){
 //   if(this.pokeId > 1008 && this.pokeId < 0)
    this._pokeService.getPokemon(this.pokeId).subscribe({
      next : (data) => {
        this.monPokemon = data;
        this.errorMessage = '';
        this.hasPokemon = true;
      },
      error : (err) => {
        this.errorMessage  = err.statusText;
        this.hasPokemon = false;
      }
    })
  }



}
