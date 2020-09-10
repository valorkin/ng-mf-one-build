import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ConfigComponent} from './config/config.component';
import {LandingComponent} from './landing/landing.component';
import {PluginProxyPageComponent} from './plugins/plugin-proxy-page.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'layout',
    component: LandingComponent
  },
  {
    path: ':proxy-tag',
    component: PluginProxyPageComponent
  }
];
