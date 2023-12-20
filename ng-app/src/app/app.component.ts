import { Component, ViewChild, ElementRef } from '@angular/core';
import { DemocomponentComponent } from './democomponent/democomponent.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  // Getting the reference of the button control
  // @ViewChild('myButton', { static: false }) myButton: ElementRef;

  ngAfterViewInit() {
    // console.log('Hello ', this.myButton.nativeElement);
  }
}
