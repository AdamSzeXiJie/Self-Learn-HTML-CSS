import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-splite-pane',
  templateUrl: './splite-pane.page.html',
  styleUrls: ['./splite-pane.page.scss'],
})
export class SplitePanePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'main');
    this.menu.open('main');
  }

}
