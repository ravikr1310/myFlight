import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SearchFlightsComponent } from './components/search-flights/search-flights.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { MainLinksComponent } from './components/main-links/main-links.component';
import { InternationalSitesComponent } from './components/international-sites/international-sites.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import { SearchResultComponent } from './search-result/search-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    SearchFlightsComponent,
    RecommendationComponent,
    MainLinksComponent,
    InternationalSitesComponent,
    FooterComponent,
    SearchResultComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
