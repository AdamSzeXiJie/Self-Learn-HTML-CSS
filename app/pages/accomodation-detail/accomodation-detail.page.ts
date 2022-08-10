import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay,EffectFade, EffectCoverflow, Lazy, Navigation, Pagination, Zoom } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, EffectFade, EffectCoverflow, Lazy, Navigation, Pagination, Zoom]);

@Component({
  selector: 'app-accomodation-detail',
  templateUrl: './accomodation-detail.page.html',
  styleUrls: ['./accomodation-detail.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccomodationDetailPage implements OnInit, AfterContentChecked {
  @ViewChild('hamburger') hamburger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;
  @ViewChild('ImgSwiper') uniImgSwiper: SwiperComponent;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  mobileMenu() {
    this.hamburger.nativeElement.classList.toggle("active");
    this.navMenu.nativeElement.classList.toggle("active");
  }
  
  closeMenu() {
    this.hamburger.nativeElement.classList.remove("active");
    this.navMenu.nativeElement.classList.remove("active");
  }

  ImgConfig: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    loopedSlides: 1,
    lazy: true,
    pagination : {type: 'fraction'},
    navigation: true,
    zoom: true,
    allowTouchMove: false,
  }

  ngAfterContentChecked() {
    if (this.uniImgSwiper) {
      this.uniImgSwiper.updateSwiper({});
    }
  }

  swiperSlideChanged(e) {
    console.log('changed: ', e);
  }
}