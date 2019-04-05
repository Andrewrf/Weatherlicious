import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/locations.service';
import { Location } from '../../models/locations.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
locations: Location[];

  constructor(public locationService: LocationService) { }

  ngOnInit() {
    this.locations = this.locationService.getLocations();
  }

}
