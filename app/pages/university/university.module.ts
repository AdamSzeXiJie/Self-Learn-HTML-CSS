import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversityPageRoutingModule } from './university-routing.module';
import { SwiperModule } from 'swiper/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UniversityPage } from './university.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversityPageRoutingModule,
    SwiperModule,
    Ng2SearchPipeModule
  ],
  declarations: [UniversityPage]
})
export class UniversityPageModule {}
