import { Component, Input } from '@angular/core';
import { Stat } from 'src/app/shared/models/pokemon';
import { Stat2 } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  @Input() stats! : Stat[];

}
