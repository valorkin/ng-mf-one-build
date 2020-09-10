import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DownloadComponent } from './download.component';
import { UploadComponent } from './upload.component';
import {PrListModule} from './pr-list/pr-list.module';

@NgModule({
  imports: [
    BrowserModule,
    PrListModule
  ],
  declarations: [
    AppComponent,
    DownloadComponent,
    UploadComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
