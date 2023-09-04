import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabricreceiptsavePage } from './fabricreceiptsave.page';

describe('FabricreceiptsavePage', () => {
  let component: FabricreceiptsavePage;
  let fixture: ComponentFixture<FabricreceiptsavePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricreceiptsavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FabricreceiptsavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
