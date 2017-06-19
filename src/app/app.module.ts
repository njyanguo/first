import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent as appComponent } from './app.component';
import {appRoutes as appRoutes} from './app.routes';

@NgModule({
  declarations: [
    appComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }
