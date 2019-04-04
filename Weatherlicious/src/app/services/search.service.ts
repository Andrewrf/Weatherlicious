import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl: string = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
  queryUrl: string = '?apikey=Oh4oTVV5nhDFcWCIok8zVSCdadB0yaCt&q=';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
      .get(this.baseUrl + this.queryUrl + term, {});
  }
}
