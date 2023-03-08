import { Component } from '@angular/core';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss']
})
export class ReadAllComponent {
  
  articles! : article[];

  constructor(private _articleService : ArticleService){
    this.articles = this._articleService.allArticles;
  }

  remove(index : number){
    this._articleService.remove(index);
  }

  update(index : number, art : article){
    this._articleService.articleForUpdate = art;
    this._articleService.indexForRemove = index;
  }


}
