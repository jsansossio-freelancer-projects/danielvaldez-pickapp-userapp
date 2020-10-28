import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryhomePage } from './categoryhome.page';

describe('CategoryhomePage', () => {
  let component: CategoryhomePage;
  let fixture: ComponentFixture<CategoryhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
