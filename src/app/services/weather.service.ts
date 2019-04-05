import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class WeatherService {
  searchUrl: string = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
  searchQueryUrl: string = '&q=';
  currentConditionsUrl: string = 'http://dataservice.accuweather.com/currentconditions/v1/';
  forecastUrl: string = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
  apiKeyQuery: string = '?apikey=CqD85wVFoVG08lcMLciGPXMmRA7eKeyP';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
      .get<any[]>(this.searchUrl + this.apiKeyQuery + this.searchQueryUrl + term, {});
  }

  getWeather(key) {
    // Get response for forecast and current and combine into one observable
      let currentConditions = this.http.get(this.currentConditionsUrl + key + this.apiKeyQuery);
      let forecast = this.http.get(this.forecastUrl + key + this.apiKeyQuery);
      return Observable.forkJoin([currentConditions, forecast]);
  }
}
