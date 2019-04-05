import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationService } from '../../../services/locations.service';
import { Location } from '../../../models/locations.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css']
})
export class LocationTableComponent implements OnInit {
  locations: Location[];
  displayedColumns: string[] = ['City', 'Toggle Current Condition', 'Toggle Forecast', 'Delete'];
  @ViewChild(MatTable) table: MatTable<any>;

  toggleForecast(index) {
    this.locationService.updateForecast(index);
    this.renderRows();
  }

  toggleCurrentCondition(index) {
    this.locationService.updateCurrentCondition(index);
    this.renderRows();
  }

  deleteLocation(index) {
    this.locationService.deleteLocation(index);
    this.renderRows();
  }

  renderRows() {
    this.table.renderRows();
  }

  constructor(public locationService: LocationService) {
    this.locations = locationService.getLocations();
  }

  ngOnInit() {
  }

}
