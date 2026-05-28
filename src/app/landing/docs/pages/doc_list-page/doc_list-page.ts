import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doc-list-page',
  imports: [RouterLink],
  templateUrl: './doc_list-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DocListPage {}
