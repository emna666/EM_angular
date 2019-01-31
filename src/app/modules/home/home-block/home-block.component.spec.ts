import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HomeBlockComponent} from "@modules/home/home-block/home-block.component";

describe('HomeBlockComponent', () => {
  let component: HomeBlockComponent;
  let fixture: ComponentFixture<HomeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
