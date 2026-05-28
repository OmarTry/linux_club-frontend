import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-people-page',
  imports: [],
  templateUrl: './people-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PeoplePage {}
