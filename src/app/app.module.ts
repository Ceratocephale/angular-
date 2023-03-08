import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientComponent } from './modules/demo/http-client/http-client.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { PokemonsComponent } from './modules/exercices/pokemons/pokemons.component';
import { TypesComponent } from './modules/exercices/pokemons/types/types.component';
import { StatsComponent } from './modules/exercices/pokemons/stats/stats.component';
import { InterceptorInterceptor } from './shared/interceptor/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : InterceptorInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
