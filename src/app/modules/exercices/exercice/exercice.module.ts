import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { CRUDComponent } from '../CRUD/crud.component';
import { ReadAllComponent } from '../CRUD/read-all/read-all.component';
import { ReadOneComponent } from '../CRUD/read-one/read-one.component';
import { UpdateComponent } from '../CRUD/update/update.component';
import { CreateComponent } from '../CRUD/create/create.component';
import { DeleteComponent } from '../CRUD/delete/delete.component';
import { ArticlesBannerComponent } from '../articles-banner/articles-banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { StatsComponent } from '../pokemons/stats/stats.component';
import { TypesComponent } from '../pokemons/types/types.component';

@NgModule({
  declarations: [
    ArticlesBannerComponent,
    CRUDComponent,
    ReadAllComponent,
    ReadOneComponent,
    UpdateComponent,
    CreateComponent,
    DeleteComponent,
    PokemonsComponent,
    StatsComponent,
    TypesComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ExerciceModule { }
