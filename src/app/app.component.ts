import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SharedService } from './shared.service';
import { text } from '@angular/core/src/render3';
import { OtherComponent } from './other/other.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SiblingInteraction';
  @ViewChildren(OtherComponent) other: QueryList<OtherComponent>;

  ngAfterViewInit(){
    //this.other.method();
    console.log(this.other.toArray());
  }
}
