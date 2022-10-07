import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PendingTaskComponent } from './components/pending-task/pending-task.component';

import { EffectsModule } from '@ngrx/effects';

import {HttpClientModule} from '@angular/common/http';
import { storeEffect } from './store/store.effects';
import { StoreModule } from '@ngrx/store';
import {  storeReducer } from './store/store.reducers';

@NgModule({
  declarations: [
    AppComponent,
    PendingTaskComponent
  ],
  imports: [
    HttpClientModule,
    StoreModule.forRoot({ tasks: storeReducer }),
    EffectsModule.forRoot([storeEffect]),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
