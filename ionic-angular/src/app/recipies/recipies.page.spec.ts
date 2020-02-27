import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipiesPage } from './recipies.page';

describe('RecipiesPage', () => {
  let component: RecipiesPage;
  let fixture: ComponentFixture<RecipiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
