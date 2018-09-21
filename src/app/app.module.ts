import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageLogoComponent } from './components/home-page-logo/home-page-logo.component';
import { HomePageNavbarComponent } from './components/home-page-navbar/home-page-navbar.component';
import { HomePageCenterContentComponent } from './components/home-page-center-content/home-page-center-content.component';
import { HomePageFooterComponent } from './components/home-page-footer/home-page-footer.component';
import { AboutComponent } from './components/about/about.component';
import { OurFeaturesComponent } from './components/our-features/our-features.component';
import { OurWorkFlowComponent } from './components/our-work-flow/our-work-flow.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomePageComponent,
    HomePageLogoComponent,
    HomePageNavbarComponent,
    HomePageCenterContentComponent,
    HomePageFooterComponent,
    AboutComponent,
    OurFeaturesComponent,
    OurWorkFlowComponent
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
