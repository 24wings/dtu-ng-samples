import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DtuNgAntDesignModule} from 'dtu-ng-ant-design';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DtuNgAntDesignModule.forChild(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
