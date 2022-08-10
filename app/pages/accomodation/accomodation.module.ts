import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { AccomodationPageRoutingModule } from './accomodation-routing.module';

import { AccomodationPage } from './accomodation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccomodationPageRoutingModule,
    SwiperModule
  ],
  declarations: [AccomodationPage]
})
export class AccomodationPageModule {}
