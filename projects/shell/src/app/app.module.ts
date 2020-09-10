import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {IconModule, LayoutGridModule, LayoutPanelModule, LinkModule} from '@fundamental-ngx/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { PluginProxyComponent } from './plugins/plugin-proxy.component';
import {HomeComponent} from './home/home.component';
import {LandingComponent} from './landing/landing.component';

@NgModule({
  imports: [
    BrowserModule,
    IconModule, LayoutGridModule, LayoutPanelModule, LinkModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    PluginProxyComponent,
    ConfigComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
