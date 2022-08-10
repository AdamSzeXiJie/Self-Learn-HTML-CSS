import { AfterContentChecked, Component, OnInit, ViewChild, ElementRef,ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, Navigation]);

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.page.html',
  styleUrls: ['./accomodation.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccomodationPage implements OnInit, AfterContentChecked {
  @ViewChild('accomodationSwiper') accomodationSwiper: SwiperComponent;
  @ViewChild('hamburger') hamburger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

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

  // Main Info Swiper
  accomodationConfig: SwiperOptions = {
    slidesPerView: 'auto',
    autoplay: {
      delay: 5000,
    },
    loop: true,
    navigation: true,
    allowTouchMove: false,
  }

  ngAfterContentChecked() {
    if (this.accomodationSwiper) {
      this.accomodationSwiper.updateSwiper({});
    }
  }

  swiperSlideChanged(e) {
    console.log('changed: ', e);
  }

  accomodation = [{"accoImg": [{"img": 'SUT.png'}, {"img": 'AEU.png'}],"name": 'Victoria Hall', "location": '63B, Lorong Uplands 2 93200 Kuching Sarawak'},
  {"accoImg": [{"img": 'SUT.png'}, {"img": 'AEU.png'}],"name": 'Victoria Hall', "location": '63B, Lorong Uplands 2 93200 Kuching Sarawak'},
  {"accoImg": [{"img": 'SUT.png'}, {"img": 'AEU.png'}],"name": 'Victoria Hall', "location": '63B, Lorong Uplands 2 93200 Kuching Sarawak'},
  {"accoImg": [{"img": 'SUT.png'}, {"img": 'AEU.png'}],"name": 'Victoria Hall', "location": '63B, Lorong Uplands 2 93200 Kuching Sarawak'},
  {"accoImg": [{"img": 'SUT.png'}, {"img": 'AEU.png'}],"name": 'Victoria Hall', "location": '63B, Lorong Uplands 2 93200 Kuching Sarawak'},
  {"accoImg": [{"img": 'SUT.png'}, {"img": 'AEU.png'}],"name": 'Victoria Hall', "location": '63B, Lorong Uplands 2 93200 Kuching Sarawak'},
  {"accoImg": [{"img": 'SUT.png'}, {"img": 'AEU.png'}],"name": 'Victoria Hall', "location": '63B, Lorong Uplands 2 93200 Kuching Sarawak'}]

}
