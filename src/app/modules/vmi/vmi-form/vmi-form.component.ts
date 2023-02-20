import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {NavigationEnd, Router} from '@angular/router';
import {ActiveWorkflowIndex, DataStoreObjects, VmiFormPaths, VmiFormSteps} from '../../../@shared/utils/constants';
import {DataStoreService} from '../../../@core/data-store.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'vmi-form',
  templateUrl: './vmi-form.component.html',
  styleUrls: ['./vmi-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VmiFormComponent implements OnInit {

  public steps: MenuItem[];

  public activeStepIndex = 0;
  public subscriptionDS: Subscription = new Subscription();

  constructor(
    private router: Router,
    private dataStoreService: DataStoreService) {
  }

  ngOnInit(): void {
    this.initRoute();
    this.initSteps();
    this.subscribeToRouterEvents();
    this.subscribeToDataStoreService()
  }

  public onSubmit() {

  }

  public nextStep() {
    switch (this.activeStepIndex) {
      case VmiFormSteps.SEARCH_APPLICANT_STEP : {
        this.navigateTo(VmiFormSteps.APPLICANT_INFO_STEP, VmiFormPaths.APPLICANT_PATH);
        break
      }
      case VmiFormSteps.APPLICANT_INFO_STEP : {
        this.navigateTo(VmiFormSteps.ADDRESS_INFO_STEP, VmiFormPaths.ADDRESS_PATH);
        break;
      }
      case VmiFormSteps.ADDRESS_INFO_STEP : {
        this.navigateTo(VmiFormSteps.HOUSEHOLD_STEP, VmiFormPaths.HOUSEHOLD_PATH);
        break;
      }
      case VmiFormSteps.HOUSEHOLD_STEP : {
        // this.navigateTo(VmiFormSteps.ADDRESS_INFO_STEP, VmiFormPaths.ADDRESS_PATH);
        break;
      }
    }
  }

  public prevStep() {
    switch (this.activeStepIndex) {
      case VmiFormSteps.SEARCH_APPLICANT_STEP : {
        break
      }
      case VmiFormSteps.APPLICANT_INFO_STEP : {
        this.navigateTo(VmiFormSteps.SEARCH_APPLICANT_STEP, VmiFormPaths.REQUEST_PATH);
        break;
      }
      case VmiFormSteps.ADDRESS_INFO_STEP : {
        this.navigateTo(VmiFormSteps.APPLICANT_INFO_STEP, VmiFormPaths.APPLICANT_PATH);
        break;
      }
      case VmiFormSteps.HOUSEHOLD_STEP : {
        this.navigateTo(VmiFormSteps.ADDRESS_INFO_STEP, VmiFormPaths.ADDRESS_PATH);
        break;
      }
    }
  }

  private subscribeToDataStoreService(): void {
    this.subscriptionDS = this.dataStoreService.getObservableForDataChange().subscribe((dataStoreObject: any) => {
      if (!dataStoreObject.hasOwnProperty(DataStoreObjects.ACTIVE_WORKFLOW_INDEX)) {
        this.dataStoreService.setData(DataStoreObjects.ACTIVE_WORKFLOW_INDEX, ActiveWorkflowIndex.VMI_REQUEST_FORM);
      }
      if (dataStoreObject.hasOwnProperty(DataStoreObjects.VMI_ACTIVE_FORM_INDEX)) {
        this.activeStepIndex = dataStoreObject[DataStoreObjects.VMI_ACTIVE_FORM_INDEX];
      }
    });
  }

  private subscribeToRouterEvents(): void {
    this.router.events.subscribe((eventRouter) => {
      if (eventRouter instanceof NavigationEnd) {
        switch (eventRouter.url) {
          case VmiFormPaths.REQUEST_PATH : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.SEARCH_APPLICANT_STEP);
            break;
          }
          case VmiFormPaths.APPLICANT_PATH : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.APPLICANT_INFO_STEP);
            break;
          }
          case VmiFormPaths.ADDRESS_PATH : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.ADDRESS_INFO_STEP);
            break;
          }
          case VmiFormPaths.HOUSEHOLD_PATH : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.HOUSEHOLD_STEP);
            break;
          }
        }
        this.dataStoreService.refreshDataOnAllObservers();
      }
    });
  }

  private initSteps(): void {
    this.steps = [
      {
        id: VmiFormSteps.SEARCH_APPLICANT_STEP.toString(),
        label: 'Initializare crere',
        command: () => {
          this.navigateTo(VmiFormSteps.SEARCH_APPLICANT_STEP, VmiFormPaths.REQUEST_PATH);
        }
      },
      {
        id: VmiFormSteps.APPLICANT_INFO_STEP.toString(),
        label: 'Solicitant',
        command: () => {
          this.navigateTo(VmiFormSteps.APPLICANT_INFO_STEP, VmiFormPaths.APPLICANT_PATH);
        }
      },
      {
        id: VmiFormSteps.ADDRESS_INFO_STEP.toString(),
        label: 'Adresa',
        command: () => {
          this.navigateTo(VmiFormSteps.ADDRESS_INFO_STEP, VmiFormPaths.ADDRESS_PATH);
        }
      },
      {
        id: VmiFormSteps.HOUSEHOLD_STEP.toString(),
        label: 'Membrii',
        command: () => {
          this.navigateTo(VmiFormSteps.HOUSEHOLD_STEP, VmiFormPaths.HOUSEHOLD_PATH);
        }
      }
    ];
  }

  private initRoute(): void {
    if (this.activeStepIndex === VmiFormSteps.SEARCH_APPLICANT_STEP &&
      this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_ACTIVE_FORM_INDEX) !== VmiFormSteps.SEARCH_APPLICANT_STEP) {
      this.router.navigateByUrl(VmiFormPaths.REQUEST_PATH);
    }
  }

  private navigateTo(index: number, url: string): void {
    this.router.navigate([url]).then(() => {
      this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, index);
      this.dataStoreService.refreshDataOnAllObservers();
    });
  }
}
