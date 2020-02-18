import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrincadeiraPage } from './brincadeira.page';

describe('BrincadeiraPage', () => {
  let component: BrincadeiraPage;
  let fixture: ComponentFixture<BrincadeiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrincadeiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrincadeiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
