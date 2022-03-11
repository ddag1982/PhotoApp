import { Component, Input } from '@angular/core';
import { Photo } from '../../interfaces';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
  @Input() photo: Photo;

  private errorImage =
    'https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg';

  public onErrorImage(event: Event) {
    (event.target as HTMLImageElement).src = this.errorImage;
  }
}
