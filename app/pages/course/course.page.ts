import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation  } from '@angular/core';
import { IonContent, IonItemGroup } from '@ionic/angular';
import SwiperCore, { Keyboard, Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Keyboard, Pagination, Navigation]);

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursePage implements OnInit, AfterViewInit, AfterContentChecked {
  @ViewChild('hamburger') hamburger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;
  @ViewChild('navSwiper') navSwiper: SwiperComponent;
  @ViewChild(IonContent) content: IonContent;
  @ViewChildren(IonItemGroup, { read: ElementRef }) lists: QueryList<ElementRef>;
  listElements = [];
  activeCategory = 0;
  hidden = true;

  // Nav Swiper
  navConfig: SwiperOptions = {
    freeMode: true,
    slidesPerView: 'auto',
  }

  constructor() { }

  mobileMenu() {
    this.hamburger.nativeElement.classList.toggle("active");
    this.navMenu.nativeElement.classList.toggle("active");
  }
  
  closeMenu() {
    this.hamburger.nativeElement.classList.remove("active");
    this.navMenu.nativeElement.classList.remove("active");
  }

  details() {
    this.hidden = !this.hidden;
  }

  ngOnInit() {}

  ngAfterContentChecked() {
    if (this.navSwiper) {
      this.navSwiper.updateSwiper({});
    }
  }

  ngAfterViewInit() {    
    this.lists.changes.subscribe(_ => { 
      this.listElements = this.lists.toArray();
    });
  }

  selectCategory(index) {
    const child = this.listElements[index].nativeElement;    
    this.content.scrollToPoint(0, child.offsetTop - 50, 1000);
  }

  courses = [{"category": 'Engineering', "course": [
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '4 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct', 
  "modules": [{"year": 'Year 1', "subject": [{"name": 'Mechanics of Structures', "code": 'ENG100013', "prerequisite": "ENG1000411"},
   {"name": 'Digital and Data Systems', "code": 'ENG10004', "prerequisite": "ENG10004, ENG10004, ENG10004"},
    {"name": ' Electronics and Electromagnetism', "code": 'PHY10004', "prerequisite": "ENG10004"},
   {"name": 'Linear Algebra and Applications', "code": 'MTH10013', "prerequisite": "ENG100041, ENG10004"}]}, 
   {"year": 'Year 2', "subject": [{"name": 'Mechanics of Structures'}, {"name": 'Digital and Data Systems'}, {"name": 'Mechanics of Structures'},
   {"name": 'Digital and Data Systems'}]}]},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '2 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct', 
  "modules": [{"year": 'Year 1', "subject": [{"name": 'Mechanics of Structures'}, {"name": 'Digital and Data Systems'}, {"name": 'Mechanics of Structures'},
  {"name": 'Digital and Data Systems'}]}]},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '3 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct', 
  "modules": [{"year": 'Year 1', "subject": [{"name": 'Mechanics of Structures'}, {"name": 'Digital and Data Systems'}, {"name": 'Mechanics of Structures'},
  {"name": 'Digital and Data Systems'}]}]},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '1 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct', 
  "modules": [{"year": 'Year 1', "subject": [{"name": 'Mechanics of Structures'}, {"name": 'Digital and Data Systems'}, {"name": 'Mechanics of Structures'},
  {"name": 'Digital and Data Systems'}]}]}]},
  {"category": 'Business', "course": [
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '4 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '1 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '2 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '3 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'}]},
  {"category": 'Art', "course": [
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '4 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '4 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '3 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '2 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'}]},
  {"category": 'It', "course": [
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '4 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '4 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '1 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '3 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'}]},
  {"category": 'Design', "course": [
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '4 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '4 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '2 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'},
  {"name": 'Swinburne Foundation Studies (Engineering/Science)', "duration": '2 Years', "fees": 'RM 3,000 to 4,000 per year', "intakes": 'Apr, Sept, Oct'}]}]
}
