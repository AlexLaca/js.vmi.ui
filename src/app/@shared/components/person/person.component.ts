import {Component, Inject, Input, LOCALE_ID, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStoreService} from '../../../@core/data-store.service';
import {DataStoreObjects, VmiFormSteps} from '../../utils/constants';

import {VmiStepperFormUi} from '../../models/ui/vmi-stepper-form.ui';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {formatDate} from '@angular/common';
import {VmiDataFormUi} from '../../models/ui/vmi-data-form.ui';

@Component({
  selector: 'vmi-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonComponent implements OnInit {

  @Input() public showCitizenship: boolean;

  public dataModel: VmiDataFormUi;
  public formGroup: FormGroup;
  public activeStepIndex: number;

  public readonly: boolean;
  public showCountryName: boolean;
  public selectedCitizenship: string = 'ro';

  public subscriptionDS: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataStoreService: DataStoreService,
    @Inject(LOCALE_ID) private locale: string) {

    this.readonly = true;

    this.subscriptionDS = this.dataStoreService.getObservableForDataChange().subscribe((dataStoreObject: any) => {

      this.activeStepIndex = this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_ACTIVE_FORM_INDEX);


    });
  }

  ngOnInit(): void {


    this.formGroup = new FormGroup({
      pnc: new FormControl(''),
      lastName: new FormControl(''),
      firstName: new FormControl(''),
      serial: new FormControl(''),
      serialNr: new FormControl(''),
      issuedBy: new FormControl(''),
      documentType: new FormControl(''),
      validUntil: new FormControl(''),
      issueDate: new FormControl(''),

      citizenship: new FormControl('ro'),
      countryName: new FormControl(''),
    });

    this.readonly = true;
    this.formGroup.controls['citizenship'].valueChanges.subscribe(value => {
      if (value === 'ro') {
        this.showCountryName = false;
      } else {
        this.showCountryName = true;
      }
    });


  }
  // formatDate(this.dataModel.data.identityDocument.validUntil, 'dd-MM-yy', this.locale)
  public onSubmit() {

  }
}
