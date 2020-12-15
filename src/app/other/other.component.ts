import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit, AfterViewInit {

  value: string;
  @ViewChild('otherContent') otherContent: ElementRef;
  constructor(private service: SharedService) {}

  ngOnInit() {
    this.service.obsBS.subscribe(val =>
      this.value = val);
  }
  ngAfterViewInit() {
    console.log(this.otherContent.nativeElement);
  }
  method(){
    console.log('method in other component');
  }

}
