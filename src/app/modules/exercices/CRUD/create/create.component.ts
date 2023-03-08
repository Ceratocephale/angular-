import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private _formBuilder : FormBuilder, private _articleService : ArticleService){}

  myCreateForm : FormGroup = this._formBuilder.group({
    name : ['', [Validators.required]],
    category : ['',[Validators.required]],
    price : ['', [Validators.required]],
    creationDate : ['', [Validators.required]],
    description : [''],
    note : ['', [Validators.required]]
  })

  submit(){
    let values = this.myCreateForm.value;
    let id = this._articleService.id = this._articleService.id + 1;
    let newArticle : article = {
      id : this._articleService.id,
      name : values.name,
      category : values.category,
      price : values.price,
      creationDate : values.creationDate,
      description : values.description,
      note : values.note
    }
    this._articleService.add(newArticle);
  }

}
