import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  textInput: string;
  constructor(private service: SharedService){}

  ngOnInit(){}
  onClick(){
    this.service.behaviorSubject.next(this.textInput);
  }

}
