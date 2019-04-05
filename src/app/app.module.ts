import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatExpansionModule, MatInputModule, MatTableModule } from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { SearchComponent } from './components/manage/search/search.component';
import { LocationCardComponent } from './components/dashboard/location-card/location-card.component';
import { LocationTableComponent } from './components/manage/location-table/location-table.component';
import { LocationService } from './services/locations.service';
import { WeatherService } from './services/weather.service';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageComponent,
    SearchComponent,
    LocationCardComponent,
    LocationTableComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    LocationService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
