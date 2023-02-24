import {Component, Inject, LOCALE_ID, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStoreService} from '../../../@core/data-store.service';
import {DataStoreObjects, VmiFormSteps} from '../../utils/constants';

import {VmiStepperFormUi} from '../../models/ui/vmi-stepper-form.ui';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {formatDate} from '@angular/common';
import {VmiDataFormUi} from '../../models/ui/vmi-data-form.ui';

@Component({
  selector: 'vmi-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonDetailComponent implements OnInit {

  public dataModel: VmiDataFormUi;
  public formGroup: FormGroup;
  public activeStepIndex: number;

  public readonly : boolean;

  public subscriptionDS: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataStoreService: DataStoreService,
    @Inject(LOCALE_ID) private locale: string) {

    this.subscriptionDS = this.dataStoreService.getObservableForDataChange().subscribe((dataStoreObject: any) => {

      this.activeStepIndex = this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_ACTIVE_FORM_INDEX);

      if (this.activeStepIndex === VmiFormSteps.ADDRESS_INFO_STEP && this.formGroup.valid) {

      }
    });
  }

  ngOnInit(): void {
    this.readonly = true;
    if (this.activeStepIndex === VmiFormSteps.APPLICANT_INFO_STEP) {
      let stepperFormUi: VmiStepperFormUi = this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_REQUEST_FORM_DATA);

      this.dataModel = stepperFormUi.secondStep;

      this.formGroup = new FormGroup({
        pnc: new FormControl(this.dataModel.data.person.pnc, [Validators.required]),
        lastName: new FormControl(this.dataModel.data.person.lastName),
        firstName: new FormControl(this.dataModel.data.person.firstName),

        serial: new FormControl(this.dataModel.data.identityDocument.serial),
        serialNr: new FormControl(this.dataModel.data.identityDocument.serialNr),
        issuedBy: new FormControl(this.dataModel.data.identityDocument.issuedBy),
        documentType: new FormControl(this.dataModel.data.identityDocument.documentType.value),
        validUntil: new FormControl(formatDate(this.dataModel.data.identityDocument.validUntil, 'dd-MM-yy', this.locale)),
        issueDate: new FormControl(formatDate(this.dataModel.data.identityDocument.issueDate, 'dd-MM-yy', this.locale)),
      });

    }
    else if (this.activeStepIndex === VmiFormSteps.HOUSEHOLD_STEP) {
      this.formGroup = new FormGroup({
        pnc: new FormControl('', [Validators.required]),
        lastName: new FormControl(''),
        firstName: new FormControl(''),

        serial: new FormControl(''),
        serialNr: new FormControl(''),
        issuedBy: new FormControl(''),
        documentType: new FormControl(''),
        validUntil: new FormControl(''),
        issueDate: new FormControl(''),
      });
    }


  }

  public onSubmit() {

  }
}
