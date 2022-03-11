import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../interfaces';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {
  @Input() photo: Photo;
  private errorImage =
    'https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg';

  constructor() {}

  ngOnInit() {}

  public onErrorImage(event: any) {
    event.target.src = this.errorImage;
  }
}
