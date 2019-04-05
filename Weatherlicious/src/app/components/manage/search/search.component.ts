import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { LocationService } from '../../../services/locations.service';
import { Location } from '../../../models/locations.model';
import { Subject } from 'rxjs';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
expansion;
results = [];
searchEntry = new Subject<string>();
@Output() locationSelected = new EventEmitter();
@ViewChild(MatExpansionPanel) panel: MatExpansionPanel;

  constructor(public locationService: LocationService, public weatherService: WeatherService) {
    this.weatherService.search(this.searchEntry)
      .subscribe(response => {
        this.results = response;
      });
  }

  ngOnInit() {
  }

  addLocation(selection) {
    this.panel.close();
    this.weatherService.getWeather(selection.Key).subscribe(responseList => {
      const currentData: any = responseList[0];
      const forecastData: any = responseList[1];
      // Map responses to new Location Object
      const newLocation = new Location(
       selection.LocalizedName, selection.AdministrativeArea.LocalizedName, selection.Key, true, true,
       currentData[0].WeatherText, currentData[0].Temperature.Imperial.Value,
       forecastData.DailyForecasts[0].Temperature.Minimum.Value, forecastData.DailyForecasts[0].Temperature.Maximum.Value,
       forecastData.Headline.Text);
      this.locationService.addLocation(newLocation);
      this.locationSelected.emit('Success');
    })
  }

}
