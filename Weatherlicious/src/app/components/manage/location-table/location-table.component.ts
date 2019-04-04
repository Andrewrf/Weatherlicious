import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/locations.service';
import { Location } from '../../models/locations.model';

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css']
})
export class LocationTableComponent implements OnInit {
  locations: Location[];

  constructor(public locationService: LocationService) {
    this.locations = locationService.getLocations();
  }

  ngOnInit() {
  }

}
