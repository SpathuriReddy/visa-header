import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private payWithVisaClicked = false;
  constructor() { }
  onClickPayWithVisa(){
    this.payWithVisaClicked = true;
  }

}
