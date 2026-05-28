import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-showcase-page',
  imports: [RouterLink],
  templateUrl: './projects_showcase-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsShowcasePage {}
