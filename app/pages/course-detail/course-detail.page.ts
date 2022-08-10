import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourseDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sectionSelection = '0';
  @ViewChild('nacc') nacc: ElementRef;

  activeChildHeight = "234px"

  selectSection(selection){
    this.sectionSelection = selection;
    console.log(this.activeChildHeight)
    // this.activeChildHeight = this.nacc.nativeElement.children[selection].offsetHeight + "px"
  }
}
