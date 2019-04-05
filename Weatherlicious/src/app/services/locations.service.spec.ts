import { LocationService } from './locations.service';
import { Location } from '../models/locations.model';

describe('Locations Service Test', () => {
  it('should return a list of locations', () => {
    const location = new LocationService();
    const list = location.getLocations();
    expect(list.length).toBe(5);
  });

  it('should toggle the forecast option', () => {
    const locations = new LocationService();
    const list = locations.getLocations();
    expect(list[0].toggleForecast).toBe(true);
    locations.updateForecast(0);
    expect(list[0].toggleForecast).toBe(false);
  });

  it('should toggle the current conditions option', () => {
    const locations = new LocationService();
    const list = locations.getLocations();
    expect(list[0].toggleCurrentCondition).toBe(true);
    locations.updateCurrentCondition(0);
    expect(list[0].toggleCurrentCondition).toBe(false);
  });

  it('should delete the given location from the list', () => {
    const location = new LocationService();
    const list = location.getLocations();
    expect(list.length).toBe(5);
    expect(list[0].city).toBe('Provo');
    location.deleteLocation(0);
    expect(list[0].city).toBe('Salt Lake City');
    expect(list.length).toBe(4);
  });

  it('should add a new location to the list', () => {
    const location = new LocationService();
    const list = location.getLocations();
    expect(list.length).toBe(5);
    const newLocation = new Location('Yogi', 'Bear', 123456, true, true, 'Picnic Baskets', 55, 40, 70, 'Hey Boo Boo!');
    location.addLocation(newLocation);
    expect(list.length).toBe(6);
    expect(list[5].city).toBe('Yogi');
  });
});
