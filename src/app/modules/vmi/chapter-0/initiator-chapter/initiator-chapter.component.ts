import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {VmiFormService} from '../../vmi-form/vmi-form.service';
import {DataStoreObjects, VmiFormPaths, VmiFormSteps} from '../../../../@shared/utils/constants';
import {DpabdResponseModel} from '../../../../@shared/models/dpabd-response.model';
import {DataStoreService} from '../../../../@core/data-store.service';
import {Router} from '@angular/router';
import {VmiStepperFormUi} from '../../../../@shared/models/ui/vmi-stepper-form.ui';

@Component({
  selector: 'vmi-initiator-chapter',
  templateUrl: './initiator-chapter.component.html',
  styleUrls: ['./initiator-chapter.component.scss']
})
export class InitiatorChapterComponent implements OnInit {

  public formGroup: FormGroup;
  public stepperForm: VmiStepperFormUi = new VmiStepperFormUi();

  constructor(
    private router: Router,
    private vmiFormService: VmiFormService,
    private dataStoreService: DataStoreService) {

    this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.CHAPTER_0_STEP);
  }

  ngOnInit(): void {
    console.log(
      'InitiatorChapterComponent_onInit_VMI_ACTIVE_FORM_INDEX',
      this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_ACTIVE_FORM_INDEX));


    this.formGroup = new FormGroup({
      applicantType: new FormControl(''),
      requestType: new FormControl(''),
    });
  }

  public onSearchEvent(data: DpabdResponseModel) {
    if (this.formGroup.valid && data) {

      this.stepperForm.data = data;
      this.dataStoreService.setData(DataStoreObjects.VMI_REQUEST_FORM_DATA, this.stepperForm);

      this.router.navigateByUrl(VmiFormPaths.CHAPTER_1_PATH).then(r => '');
    }
  }
}
