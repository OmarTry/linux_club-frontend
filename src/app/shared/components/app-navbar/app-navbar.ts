import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './app-navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppNavbar {}
