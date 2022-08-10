import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwinburneSarawakPage } from './swinburne-sarawak.page';

const routes: Routes = [
  {
    path: '',
    component: SwinburneSarawakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwinburneSarawakPageRoutingModule {}
