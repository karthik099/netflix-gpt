import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.scss']
})
export class DemocomponentComponent {




  @ViewChild('highlight')
  marker!: ElementRef;


constructor(){
}
ngOnInit(){


}

ngAfterViewInit(){
  console.log('>>>>>>', this.marker);
}

}
