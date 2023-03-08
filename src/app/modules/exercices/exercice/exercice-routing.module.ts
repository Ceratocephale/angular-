import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';
import { ArticlesBannerComponent } from '../articles-banner/articles-banner.component';
import { CreateComponent } from '../CRUD/create/create.component';
import { CRUDComponent } from '../CRUD/crud.component';
import { DeleteComponent } from '../CRUD/delete/delete.component';
import { ReadAllComponent } from '../CRUD/read-all/read-all.component';
import { ReadOneComponent } from '../CRUD/read-one/read-one.component';
import { UpdateComponent } from '../CRUD/update/update.component';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { StatsComponent } from '../pokemons/stats/stats.component';
import { TypesComponent } from '../pokemons/types/types.component';

const routes: Routes = [
  {path : '', component : ArticlesBannerComponent, children : [
    {path : 'CRUD', component : CRUDComponent, canActivate : [AuthGuard], children : [
      {path : 'articles', component : ReadAllComponent},
      {path : 'articles/:id', component : ReadOneComponent},
      {path : 'update', component : UpdateComponent},
      {path : 'create', component : CreateComponent},
      {path : 'delete', component : DeleteComponent}
    ]},
    {path : 'pokemons', component : PokemonsComponent, children : [
        {path : '', component : StatsComponent},
        {path : '', component : TypesComponent}
    ]}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
