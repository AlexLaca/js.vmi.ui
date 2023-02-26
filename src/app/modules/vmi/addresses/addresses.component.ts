import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VmiStepperFormUi} from '../../../@shared/models/ui/vmi-stepper-form.ui';
import {DataStoreObjects} from '../../../@shared/utils/constants';
import {DataStoreService} from '../../../@core/data-store.service';
import {VmiDataFormUi} from '../../../@shared/models/ui/vmi-data-form.ui';
import {AddressModel} from '../../../@shared/models/address.model';

@Component({
  selector: 'vmi-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddressesComponent implements OnInit {
  public isReadonly:boolean = true;
  public isNotReadonly:boolean = false;

  public addressFormGroup: FormGroup;
  public dataModel: VmiDataFormUi;

  public homeAddressCheckbox: boolean = true;
  public residenceAddressCheckbox: boolean = true;

  constructor(private dataStoreService: DataStoreService) {
  }

  ngOnInit(): void {
    let stepperFormUi: VmiStepperFormUi = this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_REQUEST_FORM_DATA);

    this.dataModel = stepperFormUi.thirdStep;

    let address: AddressModel = this.dataModel.data[0];
    console.log("THIS ADRESSES", this. dataModel);

    this.addressFormGroup = new FormGroup({
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

}
