import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppNavbar } from '../../components/app-navbar/app-navbar';
import { AppSidebar } from '../../components/app-sidebar/app-sidebar';
import { AppFooter } from '../../components/app-footer/app-footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [AppNavbar, AppSidebar, AppFooter, RouterOutlet],
  templateUrl: './main-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainLayout {}
