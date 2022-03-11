import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoFilterComponent } from '../photo-filter.component';

describe('PhotoFilterComponent', () => {
  let component: PhotoFilterComponent;
  let fixture: ComponentFixture<PhotoFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFilterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('', () => {
   const spy = spyOn(component.valueChanges, 'emit');
    component.form.get('id').setValue(1);
    expect(spy).toHaveBeenCalled();
  });
});
