import { Location } from '../models/locations.model';

export class LocationService {
    public locations: Location[] = [
      new Location('Provo', 'Utah', 123456, true, true, 'Its gonna rain', 55, 40, 70, 'Probably going to rain a lot more'),
      new Location('Salt Lake City', 'Utah', 123456, true, true, 'Super duper sunny', 69, 60, 80, 'Nothing but clear skies'),
      new Location('Vancouver', 'Washington', 123456, true, true, 'Only rains here in WA', 40, 30, 60, 'Cats and dogs baby'),
      new Location('Bentonville', 'Arkansas', 123456, true, true, 'Yall better put some sunscreen on', 55, 40, 70, 'Mighty Frightnin'),
      new Location('Bhengaluru', 'India', 123456, true, true, 'Feeling hot hot hot', 100, 40, 70, 'Still hot hot hot')
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
