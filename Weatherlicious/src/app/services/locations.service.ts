import { Location } from '../models/locations.model';

export class LocationService {
    public locations: Location[] = [
      new Location('Provo', 'Utah', 123456, true, true, 'Its gonna rain', 55, 40, 70, 'Probably going to rain a lot more'),
      new Location('Salt Lake City', 'Utah', 123456, false, true, 'Super duper sunny', 69, 60, 80, 'Nothing but clear skies'),
      new Location('Vancouver', 'Washington', 123456, true, false, 'Only rains here in WA', 40, 30, 60, 'Cats and dogs baby'),
      new Location('Bentonville', 'Arkansas', 123456, true, true, 'Pouring down rednecks', 55, 40, 70, 'Hold onto your butts'),
      new Location('Bhengaluru', 'India', 123456, true, true, 'THank you come again', 100, 40, 70, 'Probably maybe i guess')
    ];

getLocations() {
      return this.locations;
}

updateForecast(index: number) {
  this.locations[index].toggleForecast = !this.locations[index].toggleForecast;
}

updateCurrentCondition(index: number) {
  this.locations[index].toggleCurrentCondition = !this.locations[index].toggleCurrentCondition;
}

deleteLocation(index: number) {
    this.locations.splice(index, 1);
}

addLocation(newLocation: Location) {
  this.locations.push(newLocation);
}

}
