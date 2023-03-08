import { Injectable } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';
import { ArticlesBannerComponent } from 'src/app/modules/exercices/articles-banner/articles-banner.component';
import { article } from '../../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  articleForUpdate! : article;
  indexForRemove! : number;

  id : number = 2;

  articles : article[] = [
    {
      id : 1,
      name : 'Milk',
      category : 'Food',
      price : 15,
      creationDate : new Date(),
      description : '',
      note : 5
    },
    {      id : 2,
      name : 'Bread',
      category : 'Food',
      price : 15,
      creationDate : new Date(),
      description : '',
      note : 5}
  ];

 // values : 

  add(art : article){
    this.articles.push(art);
  }

  remove(id : number){
    this.articles.splice(id, 1)
  }

  get allArticles() : article[] {
    return this.articles
  }

  replace(index : number, art : article) {
    this.remove(index);
    this.articles.push(art);
  }



}
