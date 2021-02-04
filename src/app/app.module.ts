import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
