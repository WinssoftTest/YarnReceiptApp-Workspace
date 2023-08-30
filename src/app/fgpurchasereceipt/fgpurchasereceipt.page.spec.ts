import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FgpurchasereceiptPage } from './fgpurchasereceipt.page';

describe('FgpurchasereceiptPage', () => {
  let component: FgpurchasereceiptPage;
  let fixture: ComponentFixture<FgpurchasereceiptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FgpurchasereceiptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FgpurchasereceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
