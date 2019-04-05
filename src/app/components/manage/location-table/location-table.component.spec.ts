import { TestBed } from '@angular/core/testing';
import { MatSlideToggleModule, MatIconModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationTableComponent } from './location-table.component';
import { LocationService } from '../../../services/locations.service';


describe('LocationTableComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTableComponent ],
      imports: [MatTableModule, BrowserAnimationsModule, MatSlideToggleModule, MatIconModule],
      providers: [ LocationService ]
    })
  });

  it('should create the component', () => {
    let fixture = TestBed.createComponent(LocationTableComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call the toggle forecast method', () => {
    let fixture = TestBed.createComponent(LocationTableComponent);
    let app = fixture.debugElement.componentInstance;
    let locationService = fixture.debugElement.injector.get(LocationService);
    spyOn(locationService, 'updateForecast');
    spyOn(app, 'renderRows');
    app.toggleForecast(1);
    fixture.detectChanges();
    expect(locationService.updateForecast).toHaveBeenCalled();
    expect(app.renderRows).toHaveBeenCalled();
  });

  it('should call the toggle current condition method', () => {
    let fixture = TestBed.createComponent(LocationTableComponent);
    let app = fixture.debugElement.componentInstance;
    let locationService = fixture.debugElement.injector.get(LocationService);
    spyOn(locationService, 'updateCurrentCondition');
    spyOn(app, 'renderRows');
    app.toggleCurrentCondition(1);
    fixture.detectChanges();
    expect(locationService.updateCurrentCondition).toHaveBeenCalled();
    expect(app.renderRows).toHaveBeenCalled();
  });

  it('should call the delete location method', () => {
    let fixture = TestBed.createComponent(LocationTableComponent);
    let app = fixture.debugElement.componentInstance;
    let locationService = fixture.debugElement.injector.get(LocationService);
    spyOn(locationService, 'deleteLocation');
    spyOn(app, 'renderRows');
    app.deleteLocation(1);
    fixture.detectChanges();
    expect(locationService.deleteLocation).toHaveBeenCalled();
    expect(app.renderRows).toHaveBeenCalled();
  });

  it('should call the render rows method', () => {
    let fixture = TestBed.createComponent(LocationTableComponent);
    let app = fixture.debugElement.componentInstance;
    spyOn(app.table, 'renderRows');
    app.renderRows();
    fixture.detectChanges();
    expect(app.table.renderRows).toHaveBeenCalled();
  });
});
