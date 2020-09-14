import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EnrichComponent} from './enrich.component';
import {AnalyzeComponent} from './analyze.component';
import {ContentItemAppModule} from './content-item-app.module';
import {YourFavoritesModule} from './your-favorites/your-favorites.module';
import {ItemPageModule} from './item-page/item-page.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    ContentItemAppModule,
    YourFavoritesModule,
    ItemPageModule
  ],
  declarations: [
    AppComponent,
    EnrichComponent,
    AnalyzeComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
