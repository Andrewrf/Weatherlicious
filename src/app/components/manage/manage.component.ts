import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  @ViewChild('locationTable') locationTable;
  constructor() { }

  ngOnInit() {
  }

  renderTable() {
    this.locationTable.renderRows();
  }

}
