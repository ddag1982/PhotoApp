import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { PhotoServiceModule } from './services/photo-service.module';

import { HomePage } from './containers/home.page';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { PhotoFilterComponent } from './components/photo-filter/photo-filter.component';

@NgModule({
  declarations: [HomePage, PhotoCardComponent, PhotoFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    PhotoServiceModule,
  ],
})
export class HomePageModule {}
