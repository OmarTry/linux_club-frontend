import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  templateUrl: './not_found-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundPage {}
