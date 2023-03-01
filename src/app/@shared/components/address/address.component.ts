import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VmiStepperFormUi} from '../../models/ui/vmi-stepper-form.ui';
import {DataStoreObjects} from '../../utils/constants';
import {AddressModel} from '../../models/address.model';
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

    let stepperFormUi: VmiStepperFormUi = this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_REQUEST_FORM_DATA);

    this.dataModel = stepperFormUi.thirdStep;

    let address: AddressModel = this.dataModel.data[0];
    console.log("THIS ADRESSES", this. dataModel);

    this.formGroupModel = new FormGroup({
      county: new FormControl(address.county, [Validators.required]),
      city: new FormControl(address.city),
      village: new FormControl(address.village),

      street: new FormControl(address.street),
      streetNr: new FormControl(address.streetNr),
      block: new FormControl(address.block),
      stairs: new FormControl(address.stairs),
      floor: new FormControl(address.floor),
      apartment: new FormControl(address.apartment),
      sector: new FormControl(address.section),
      siruta: new FormControl(address.siruta),
    });
  }

  public onSubmit() {

  }

}
