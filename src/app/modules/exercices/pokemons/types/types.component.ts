import { Component, Input } from '@angular/core';
import { Type } from 'src/app/shared/models/pokemon';
import { Type2 } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent {

  

  @Input() types! : Type[];

}
