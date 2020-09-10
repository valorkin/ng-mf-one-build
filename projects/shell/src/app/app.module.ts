import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { PluginProxyComponent } from './plugins/plugin-proxy.component';
import {PrListModule} from '../../../mfe1/src/app/pr-list/pr-list.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,

    // todo: extract
    // PrListModule,

    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PluginProxyComponent,
    ConfigComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
