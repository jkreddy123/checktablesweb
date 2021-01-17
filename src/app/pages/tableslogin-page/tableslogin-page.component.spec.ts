import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesloginPageComponent } from './tableslogin-page.component';

describe('TablesloginPageComponent', () => {
  let component: TablesloginPageComponent;
  let fixture: ComponentFixture<TablesloginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesloginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesloginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
