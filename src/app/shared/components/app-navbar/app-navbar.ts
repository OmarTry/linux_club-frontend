import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './app-navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppNavbar {}
