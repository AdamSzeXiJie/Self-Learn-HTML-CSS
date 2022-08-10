import { AfterContentChecked, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SIZE_TO_MEDIA } from '@ionic/core/dist/collection/utils/media'
import SwiperCore, { SwiperOptions, Autoplay,EffectFade, EffectCoverflow, Lazy, Navigation, Pagination, Zoom } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, EffectFade, EffectCoverflow, Lazy, Navigation, Pagination, Zoom]);

@Component({
  selector: 'app-swinburne-sarawak',
  templateUrl: './swinburne-sarawak.page.html',
  styleUrls: ['./swinburne-sarawak.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SwinburneSarawakPage implements AfterContentChecked {
  @ViewChild('hamburger') hamburger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef; 
  @ViewChild('infoSwiper') infoSwiper: SwiperComponent;
  @ViewChild('uniImgSwiper') uniImgSwiper: SwiperComponent;
  @ViewChild('videoSwiper') videoSwiper: SwiperComponent;
  @ViewChild('newsSwiper') newsSwiper: SwiperComponent;
  @ViewChild('alumniSwiper') alumniSwiper: SwiperComponent;

  mobileMenu() {
    this.hamburger.nativeElement.classList.toggle("active");
    this.navMenu.nativeElement.classList.toggle("active");
  }

  closeMenu() {
    this.hamburger.nativeElement.classList.remove("active");
    this.navMenu.nativeElement.classList.remove("active");
  }

  // Main Info Swiper
  infoConfig: SwiperOptions = {
    slidesPerView: 1.15,
    centeredSlides: true,
    centeredSlidesBounds: true,
  }

  // Image Swipper
  uniImgConfig: SwiperOptions = {
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
    // effect: 'fade'
  }

  // Video Swipper
  videoConfig: SwiperOptions = {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: true,
    effect: 'coverflow',
  }

    // News Swipper
    newsConfig: SwiperOptions = {
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      pagination: {dynamicBullets: true},
      navigation: true,
      allowTouchMove: false,
      breakpoints: {
        740: {
          slidesPerView: 2,
        }
      }
    }

  // Alumni Swipper
  alumniConfig: SwiperOptions = {
    slidesPerView: 1,
    // centeredSlides: true,
    // spaceBetween: 30,
    loop: true,
    pagination: {dynamicBullets: true},
    navigation: true,
    allowTouchMove: false,
    breakpoints: {
      740: {
        slidesPerView: 2,
      },
      940: {
        slidesPerView: 2.5,
      },
      1100: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 3.5,
      },
      1450: {
        slidesPerView: 4,
      }
    }
  }
  
  constructor() { }

  ngAfterContentChecked() {
    if (this.infoSwiper) {
      this.infoSwiper.updateSwiper({});
    }

    if (this.uniImgSwiper) {
      this.uniImgSwiper.updateSwiper({});
    }

    if (this.newsSwiper) {
      this.newsSwiper.updateSwiper({});
    }

    if (this.videoSwiper) {
      this.videoSwiper.updateSwiper({});
    }

    if (this.alumniSwiper) {
      this.alumniSwiper.updateSwiper({});
    }
  }

  swiperSlideChanged(e) {
    console.log('changed: ', e);
  }

  toggleMenu() {
    const splitpane = document.querySelector('ion-split-pane');

    if (window.matchMedia(SIZE_TO_MEDIA[splitpane.when] || splitpane.when).matches)
      splitpane.classList.toggle('split-pane-visible')
  }

  courses = [{"title": 'Swinburne Foundation Studies (Business)', "duraton": '4 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"title": 'Swinburne Foundation Studies (Design)', "duraton": '1 Years', "fees": 'RM 1,000 to 4,000 per year', "intakes": 'Apr, Oct'},
  {"title": 'Swinburne Foundation Studies (Engineering/Science)', "duraton": '2 Years', "fees": 'RM 3,000 to 6,000 per year', "intakes": 'Apr, Sept'},
  {"title": 'Swinburne Foundation Studies (IT/Multimedia)', "duraton": '3 Years', "fees": 'RM 5,000 to 6,000 per year', "intakes": 'Sept'}];
}
