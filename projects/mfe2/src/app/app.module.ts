import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EnrichComponent } from './enrich.component';
import { AnalyzeComponent } from './analyze.component';
import {ContentItemAppModule} from './content-item-app.module';

@NgModule({
  imports: [
    BrowserModule,
    ContentItemAppModule
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
export class AppModule { }
