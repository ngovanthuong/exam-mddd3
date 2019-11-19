import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeListComponent } from './awesome-list.component';

describe('AwesomeListComponent', () => {
  let component: AwesomeListComponent;
  let fixture: ComponentFixture<AwesomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
