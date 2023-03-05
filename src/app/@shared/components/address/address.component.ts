import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {VmiDataFormUi} from '../../models/ui/vmi-data-form.ui';
import {DataStoreService} from '../../../@core/data-store.service';

@Component({
  selector: 'vmi-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AddressComponent implements OnInit {

  @Input() readonly: boolean;
  @Input() formGroupModel: FormGroup;
  public dataModel: VmiDataFormUi;
  public formGroup: FormGroup;
  public homeAddressCheckbox: boolean = true;

  constructor(private dataStoreService: DataStoreService) {
  }
  ngOnInit(): void {
    this.homeAddressCheckbox = true;

    this.formGroupModel = new FormGroup({
      county: new FormControl(''),
      city: new FormControl(''),
      village: new FormControl(''),

      street: new FormControl(''),
      streetNr: new FormControl(''),
      block: new FormControl(''),
      stairs: new FormControl(''),
      floor: new FormControl(''),
      apartment: new FormControl(''),
      sector: new FormControl(''),
      siruta: new FormControl(''),
    });
  }

  public onSubmit() {

  }

}
