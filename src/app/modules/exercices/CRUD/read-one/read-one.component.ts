import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-read-one',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.scss']
})
export class ReadOneComponent {

  selectedArticle! : article | undefined;

  constructor(private _activatedRoute : ActivatedRoute, private _articleService: ArticleService){

    let id : number = this._activatedRoute.snapshot.params['id']

    this.selectedArticle = this._articleService.articles.find(a => a.id == id);


  }

 
}
