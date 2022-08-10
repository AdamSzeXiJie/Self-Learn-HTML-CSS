import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { SwinburneSarawakPageRoutingModule } from './swinburne-sarawak-routing.module';

import { SwinburneSarawakPage } from './swinburne-sarawak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    SwinburneSarawakPageRoutingModule
  ],
  declarations: [SwinburneSarawakPage]
})
export class SwinburneSarawakPageModule {}
