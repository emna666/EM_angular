import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSingleComponent } from './home-single.component';

describe('DetailsUserComponent', () => {
  let component: HomeSingleComponent;
  let fixture: ComponentFixture<HomeSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
