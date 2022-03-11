import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Photo } from '../../../interfaces';

import { PhotoCardComponent } from '../photo-card.component';

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PhotoCardComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(PhotoCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should figcaption error with no photo', () => {
    expect(component.figCaption).toEqual('Error');
  });
  it('should figcaption with photo', () => {
    const photoMock: Photo = {
      id: 1,
      photo: 'test',
      text: 'test',
    };
    component.photo = photoMock;
    component.ngOnInit();
    expect(component.figCaption).toEqual('Photo # 1');
  });

  it('should onErrorImage', () => {
    const spy = spyOn(component, 'onErrorImage').and.callThrough();
    const img: HTMLImageElement =
      fixture.debugElement.nativeElement.querySelector('img');
    img.dispatchEvent(new Event('error'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
