import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonTabs } from '@ionic/angular';
import { SIZE_TO_MEDIA } from '@ionic/core/dist/collection/utils/media'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonTabs) tabs: IonTabs;
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
  
  selected= '';
  selectedTabs () {
    this.selected = this.tabs.getSelected();
  }
  
  splash= "true";
  
  dataLoaded: any;
  
  ionViewWillEnter() {
    setTimeout(() => {
      this.dataLoaded = {
        'uniLogo': 'false',
        'h1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 1000);
  }
  
  // toggleMenu() {
  //   const splitpane = document.querySelector('ion-split-pane');
  
  //   if (window.matchMedia(SIZE_TO_MEDIA[splitpane.when] || splitpane.when).matches)
  //     splitpane.classList.toggle('split-pane-visible')
  // }
  
  searchTerm: string;
  data = [{"uniLogo": 'SUT.png', "uniName": 'Swinburne University of Technology Sarawak', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "1"},
  {"uniLogo": 'UM.png', "uniName": 'Universiti Malaya', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "2"},
  {"uniLogo": 'UPM.png', "uniName": 'Universiti Putra Malaysia', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "3"},
  {"uniLogo": 'UITM.png', "uniName": 'Universiti Teknologi Mara', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "4"},
  {"uniLogo": 'UTM.png', "uniName": 'Universiti Teknologi Malaysia', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "5"},
  {"uniLogo": 'Monash.png', "uniName": 'Monash University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "6"},
  {"uniLogo": 'UKM.png', "uniName": 'Universiti Kebangsaan Malaysia', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "7"},
  {"uniLogo": 'Nottingham.png', "uniName": 'University of Nottingham', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "8"},
  {"uniLogo": 'Taylor.png', "uniName": 'Taylor\'s University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "9"},
  {"uniLogo": 'Sunway.png', "uniName": 'Sunway University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "10"},
  {"uniLogo": 'OUM.png', "uniName": 'Open University Malaysia', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "11"},
  {"uniLogo": 'UITM.png', "uniName": 'Universiti Tunku Abdul Rahman', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "12"},
  {"uniLogo": 'UPSI.png', "uniName": 'Universiti Pendidikan Sultan Idris', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "13"},
  {"uniLogo": 'TARC.png', "uniName": 'Kolej Universiti Tunku Abdul Rahman', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "14"},
  {"uniLogo": 'INTI.png', "uniName": 'INTI International University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "15"},
  {"uniLogo": 'USM.png', "uniName": 'Universiti Sains Malaysia', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "16"},
  {"uniLogo": 'IIUM.png', "uniName": 'International Islamic University Malaysia', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "17"},
  {"uniLogo": 'UMP.png', "uniName": 'Universiti Malaysia Pahang', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "18"},
  {"uniLogo": 'UMS.png', "uniName": 'Universiti Malaysia Sabah', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "19"},
  {"uniLogo": 'KDU.png', "uniName": 'KDU University College', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "20"},
  {"uniLogo": 'UniKL.png', "uniName": 'University of Kuala Lumpur', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "21"},
  {"uniLogo": 'WOU.png', "uniName": 'Wawasan Open University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "22"},
  {"uniLogo": 'UniMAP.png', "uniName": 'Universiti Malaysia Perlis', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "23"},
  {"uniLogo": 'HELP.png', "uniName": 'HELP University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "24"},
  {"uniLogo": 'UUM.png', "uniName": 'Universiti Utara Malaysia', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "25"},
  {"uniLogo": 'UNIMAS.png', "uniName": 'Universiti Malaysia Sarawak', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "1"},
  {"uniLogo": 'AEU.png', "uniName": 'Asia e University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "1"},
  {"uniLogo": 'MMU.png', "uniName": 'Multimedia University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "1"},
  {"uniLogo": 'UTP.png', "uniName": 'Universiti Teknologi Petronas', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "1"},
  {"uniLogo": 'SEGI.png', "uniName": 'SEGi University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "1"},
  {"uniLogo": 'UCSI.png', "uniName": 'UCSI University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "1"},
  {"uniLogo": 'IMU.png', "uniName": 'International Medical University', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "1"},
  {"uniLogo": 'IUMW.png', "uniName": 'International University of Malaya-Wales', "country": 'Malaysia', "state": 'Sarawak', "city": 'Kuching', "ranking": "1"}];
  
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}