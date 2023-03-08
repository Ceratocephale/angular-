import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  updateArticle! : article;
  myCreateForm! : FormGroup;

  constructor(private _formBuilder : FormBuilder, private _articleService : ArticleService){
    this.updateArticle = this._articleService.articleForUpdate;
    this.myCreateForm = this._formBuilder.group({
      name : [this.updateArticle.name, [Validators.required]],
      category : [this.updateArticle.category,[Validators.required]],
      price : [this.updateArticle.price, [Validators.required]],
      creationDate : [this.updateArticle.creationDate, [Validators.required]],
      description : [this.updateArticle.description],
      note : [this.updateArticle.note, [Validators.required]]
    })
      
  }





  submit(){
    let values = this.myCreateForm.value;
    let newArticle : article = {
      id : this._articleService.id,
      name : values.name,
      category : values.category,
      price : values.price,
      creationDate : values.creationDate,
      description : values.description,
      note : values.note
    }
    this._articleService.replace(this._articleService.indexForRemove, newArticle);
  }


}
