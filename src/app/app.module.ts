import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmmzQnvz1L2cN7z2eEBmdbhBEsGvYI5m0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
