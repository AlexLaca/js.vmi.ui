import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'vmi-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AddressComponent implements OnInit {

  public homeAddressCheckbox: boolean = true;

  constructor() {
  }
  ngOnInit(): void {
    this.homeAddressCheckbox = true;
  }

}
