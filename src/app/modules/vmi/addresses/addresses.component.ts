import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'vmi-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  public homeAddressCheckbox: boolean = true;
  public residenceAddressCheckbox: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
