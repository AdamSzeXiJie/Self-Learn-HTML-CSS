import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitePanePageRoutingModule } from './splite-pane-routing.module';

import { SplitePanePage } from './splite-pane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplitePanePageRoutingModule
  ],
  declarations: [SplitePanePage]
})
export class SplitePanePageModule {}
