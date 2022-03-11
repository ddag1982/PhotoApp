import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './containers/home.page';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { PhotoFilterComponent } from './components/photo-filter/photo-filter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, PhotoCardComponent, PhotoFilterComponent],
})
export class HomePageModule {}
