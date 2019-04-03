import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ManagedLocationsComponent } from './components/managed-locations/managed-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationsComponent,
    ManagedLocationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
