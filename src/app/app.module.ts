import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePageHeroComponent } from './components/home-page-hero/home-page-hero.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CountUpModule } from 'ngx-countup';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    HomePageHeroComponent,
    ContactUsComponent,
    OurProductsComponent,
    WhyUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
