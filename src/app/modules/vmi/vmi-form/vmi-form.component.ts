import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MenuItem, MessageService} from 'primeng/api';
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

  public subscriptionDS: Subscription = new Subscription();
  public activeStepIndex = 0;

  constructor(
    private router: Router,
    private dataStoreService: DataStoreService,
    private messageService: MessageService,
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.subscribeToDataStoreService()
    this.subscribeToRouterEvents();
    this.initRoute();
    this.initSteps();
  }

  public onSubmit() {

  }

  public nextStep() {
    switch (this.activeStepIndex) {
      case VmiFormSteps.SEARCH_APPLICANT_STEP : {
        this.navigateTo(VmiFormSteps.APPLICANT_INFO_STEP, VmiFormPaths.APPLICANT);
        break
      }
      case VmiFormSteps.APPLICANT_INFO_STEP : {
        this.navigateTo(VmiFormSteps.ADDRESS_INFO_STEP, VmiFormPaths.ADDRESS);
        break;
      }
      case VmiFormSteps.ADDRESS_INFO_STEP : {
        this.navigateTo(VmiFormSteps.ADDRESS_INFO_STEP, VmiFormPaths.ADDRESS);
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
        this.navigateTo(VmiFormSteps.SEARCH_APPLICANT_STEP, VmiFormPaths.REQUEST);
        break;
      }
      case VmiFormSteps.ADDRESS_INFO_STEP : {
        this.navigateTo(VmiFormSteps.APPLICANT_INFO_STEP, VmiFormPaths.APPLICANT);
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
          case VmiFormPaths.REQUEST : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.SEARCH_APPLICANT_STEP);
            this.dataStoreService.refreshDataOnAllObservers();
            break;
          }
          case VmiFormPaths.APPLICANT : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.APPLICANT_INFO_STEP);
            this.dataStoreService.refreshDataOnAllObservers();
            break;
          }
          case VmiFormPaths.ADDRESS : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.ADDRESS_INFO_STEP);
            this.dataStoreService.refreshDataOnAllObservers();
            break;
          }
        }
      }
    });
  }

  private initSteps(): void {
    this.steps = [
      {
        id: VmiFormSteps.SEARCH_APPLICANT_STEP.toString(),
        label: 'Initializare crere',
        command: () => {
          this.navigateTo(VmiFormSteps.SEARCH_APPLICANT_STEP, VmiFormPaths.REQUEST);
        }
      },
      {
        id: VmiFormSteps.APPLICANT_INFO_STEP.toString(),
        label: 'Solicitant',
        command: () => {
          this.navigateTo(VmiFormSteps.APPLICANT_INFO_STEP, VmiFormPaths.APPLICANT);
        }
      },
      {
        id: VmiFormSteps.ADDRESS_INFO_STEP.toString(),
        label: 'Adresa corespondenta',
        command: () => {
          this.navigateTo(VmiFormSteps.ADDRESS_INFO_STEP, VmiFormPaths.ADDRESS);
        }
      }
    ];
  }

  private initRoute(): void {
    if (this.activeStepIndex === VmiFormSteps.SEARCH_APPLICANT_STEP &&
      this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_ACTIVE_FORM_INDEX) !== VmiFormSteps.SEARCH_APPLICANT_STEP) {
      this.router.navigateByUrl(VmiFormPaths.REQUEST);
    }
  }

  private navigateTo(index: number, url: string): void {
    this.router.navigate([url]).then(() => {
      this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, index);
      this.dataStoreService.refreshDataOnAllObservers();
    });
  }
}
