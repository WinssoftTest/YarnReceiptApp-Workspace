import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceiptOpenFormEditPage } from './receipt-open-form-edit.page';

describe('ReceiptOpenFormEditPage', () => {
  let component: ReceiptOpenFormEditPage;
  let fixture: ComponentFixture<ReceiptOpenFormEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptOpenFormEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceiptOpenFormEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
