import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
results = [];
searchEntry = new Subject<string>();

  constructor(public searchService: SearchService) {
    this.searchService.search(this.searchEntry)
      .subscribe(response => {
        this.results = response;
      });
  }

  ngOnInit() {
  }

}
