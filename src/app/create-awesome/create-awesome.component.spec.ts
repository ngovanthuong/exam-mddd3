import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAwesomeComponent } from './create-awesome.component';

describe('CreateAwesomeComponent', () => {
  let component: CreateAwesomeComponent;
  let fixture: ComponentFixture<CreateAwesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAwesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
