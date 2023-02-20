import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {MenuItem, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {ActiveWorkflowIndex, DataStoreObjects, VmiFormSteps} from '../../../@shared/utils/constants';
import {DataStoreService} from '../../../@core/data-store.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'vmi-form',
  templateUrl: './vmi-form.component.html',
  styleUrls: ['./vmi-form.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DialogService, DynamicDialogRef, DynamicDialogConfig]
})
export class VmiFormComponent implements OnInit {

  public steps: MenuItem[];

  public subscriptionDS: Subscription = new Subscription();

  public activeStepIndex = 0;
  public msgs: any;

  constructor(
    private router: Router,
    private dataStoreService: DataStoreService,
    private messageService: MessageService,
    private translateService: TranslateService) {


  }

  ngOnInit(): void {
    this.subscriptionDS = this.dataStoreService.getObservableForDataChange().subscribe((dataStoreObject: any) => {
      if (!dataStoreObject.hasOwnProperty(DataStoreObjects.ACTIVE_WORKFLOW_INDEX)) {
        this.dataStoreService.setData(DataStoreObjects.ACTIVE_WORKFLOW_INDEX, ActiveWorkflowIndex.VMI_REQUEST_FORM);
      }
      if (dataStoreObject.hasOwnProperty(DataStoreObjects.VMI_ACTIVE_FORM_INDEX)) {
        this.activeStepIndex = dataStoreObject[DataStoreObjects.VMI_ACTIVE_FORM_INDEX];
      }

      console.log('OBJECT', dataStoreObject);

      console.log('ACTIVE_WORKFLOF', dataStoreObject[DataStoreObjects.ACTIVE_WORKFLOW_INDEX]);
      console.log('active_form_index', dataStoreObject[DataStoreObjects.VMI_ACTIVE_FORM_INDEX]);
    });

    this.initRoute();
    this.initSteps();



  }

  public onSubmit() {

  }

  public nextStep() {

    switch (this.activeStepIndex) {
      case VmiFormSteps.SEARCH_APPLICANT_STEP : {
        this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.APPLICANT_INFO_STEP);
        this.dataStoreService.refreshDataOnAllObservers();
        this.router.navigateByUrl('request/applicant');
        break
      }
      case VmiFormSteps.APPLICANT_INFO_STEP : {
        this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.ADDRESS_INFO_STEP);
        this.dataStoreService.refreshDataOnAllObservers();
        this.router.navigateByUrl('request/address');
        break;
      }
      case VmiFormSteps.ADDRESS_INFO_STEP : {
        this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.ADDRESS_INFO_STEP);
        this.dataStoreService.refreshDataOnAllObservers();
        this.router.navigateByUrl('request/address');
      }
    }
  }

  public prevStep() {
    switch (this.activeStepIndex) {
      case VmiFormSteps.SEARCH_APPLICANT_STEP : {
        break
      }
      case VmiFormSteps.APPLICANT_INFO_STEP : {
        this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.SEARCH_APPLICANT_STEP);
        this.dataStoreService.refreshDataOnAllObservers();
        this.router.navigateByUrl('request');
        break;
      }
      case VmiFormSteps.ADDRESS_INFO_STEP : {
        this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.APPLICANT_INFO_STEP);
        this.dataStoreService.refreshDataOnAllObservers();
        this.router.navigateByUrl('request/applicant');
      }
    }
  }

  private initSteps(): void {
    this.steps = [
      {
        id: VmiFormSteps.SEARCH_APPLICANT_STEP.toString(),
        label: 'Initializare crere',
        command: () => {
          this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.SEARCH_APPLICANT_STEP);
          this.dataStoreService.refreshDataOnAllObservers();
          this.router.navigateByUrl('request');
        }
      },
      {
        id: VmiFormSteps.APPLICANT_INFO_STEP.toString(),
        label: 'Solicitant',
        command: () => {
          this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.APPLICANT_INFO_STEP);
          this.dataStoreService.refreshDataOnAllObservers();
          this.router.navigateByUrl('request/applicant');
        }
      },
      {
        id: VmiFormSteps.ADDRESS_INFO_STEP.toString(),
        label: 'Adresa corespondenta',
        command: () => {
          this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.ADDRESS_INFO_STEP);
          this.dataStoreService.refreshDataOnAllObservers();
          this.router.navigateByUrl('request/address');
        }
      }
    ];
  }

  private initRoute(): void {
    if (this.activeStepIndex === VmiFormSteps.SEARCH_APPLICANT_STEP &&
      this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_ACTIVE_FORM_INDEX) !== VmiFormSteps.SEARCH_APPLICANT_STEP) {
      this.router.navigateByUrl('request');
    }
  }
}
