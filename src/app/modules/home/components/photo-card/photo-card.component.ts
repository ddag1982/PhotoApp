import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../interfaces';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {
  @Input() photo: Photo = {
    id: -1,
    photo: '',
    text: '',
  };

  public figCaption: string;

  private errorImage =
    'https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg';

  ngOnInit(): void {
    this.figCaption = this.photo.id > -1 ? `Photo # ${this.photo.id}` : 'Error';
  }
  public onErrorImage(event: Event) {
    (event.target as HTMLImageElement).src = this.errorImage;
  }
}
