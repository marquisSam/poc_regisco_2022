import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PendingTaskComponent } from './components/pending-task/pending-task.component';

import { EffectsModule } from '@ngrx/effects';

import {HttpClientModule} from '@angular/common/http';
import { storeEffect } from './store/store.effects';
import { StoreModule } from '@ngrx/store';
import {  storeReducer } from './store/store.reducers';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TimeFormatPipe } from './pipes/time-format.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PendingTaskComponent,
    TimeFormatPipe
  ],
  imports: [
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ tasks: storeReducer }),
    EffectsModule.forRoot([storeEffect]),
    BrowserModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
