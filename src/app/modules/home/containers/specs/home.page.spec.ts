import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { Photo, PhotoFilter } from '../../interfaces';
import { PhotoService } from '../../services/photo.service';

import { HomePage } from '../home.page';

const photosMock: Photo[] = [
  {
    id: 1,
    photo: 'photo1',
    text: 'text1',
  },
  {
    id: 2,
    photo: 'photo2',
    text: 'text2',
  },
];

const photoServiceMock = {
  getPhotos: () => of(photosMock),
};

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePage],
        imports: [IonicModule.forRoot()],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          {
            provide: PhotoService,
            useValue: photoServiceMock,
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should valueChanges with id not null', () => {
    const photoFilterMock: PhotoFilter = {
      id: 1,
      text: 'text1',
    };
    component.valueChanges(photoFilterMock);
    expect(component.infiniteScroll.disabled).toBeTrue();
  });

  it('should valueChanges with id null', () => {
    const photoFilterMock: PhotoFilter = {
      id: null,
      text: 'text1',
    };
    component.valueChanges(photoFilterMock);
    expect(component.infiniteScroll.disabled).toBeTrue();
  });

  it('should valueChanges', () => {
    const photoFilterMock: PhotoFilter = {
      id: null,
      text: '',
    };
    component.valueChanges(photoFilterMock);
    expect(component.infiniteScroll.disabled).toBeFalse();
  });
});
