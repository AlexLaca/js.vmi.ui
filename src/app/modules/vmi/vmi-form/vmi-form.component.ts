import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {ActiveWorkflowIndex, DataStoreObjects, VmiFormPaths, VmiFormSteps} from '../../../@shared/utils/constants';
import {DataStoreService} from '../../../@core/data-store.service';
import {Subscription} from 'rxjs';
import {PersonSearcherComponent} from '../../../@shared/components/person-searcher/person-searcher.component';
import {VmiStepperFormUi} from '../../../@shared/models/ui/vmi-stepper-form.ui';
import {DpabdResponseModel} from '../../../@shared/models/dpabd-response.model';
import {PersonModel} from '../../../@shared/models/person.model';
import {VmiDataFormUi} from '../../../@shared/models/ui/vmi-data-form.ui';
import {Event as NavigationEvent} from "@angular/router";
import {filter} from 'rxjs/operators';
import {VmiRequestModel} from '../../../@shared/models/vmi-request.model';
import {FamilyMemberFormComponent} from '../extended-family/extended-family-form/family-member-form.component';

@Component({
  selector: 'vmi-form',
  templateUrl: './vmi-form.component.html',
  styleUrls: ['./vmi-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VmiFormComponent implements OnInit {

  public steps: MenuItem[];
  public activeStepIndex = 0;
  public vmiRequest: VmiRequestModel;
  public stepperForm: VmiStepperFormUi;

  public subscriptionDS: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataStoreService: DataStoreService) {
  }

  ngOnInit(): void {
    this.initRoute();
    this.initSteps();
    this.subscribeToRouterEvents();
    this.subscribeToDataStoreService();

    this.stepperForm = new VmiStepperFormUi();
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
        this.navigateTo(VmiFormSteps.STATEMENT_STEP, VmiFormPaths.STATEMENT_PATH);
        break;
      }
      case VmiFormSteps.STATEMENT_STEP : {
        this.navigateTo(VmiFormSteps.SUMMARY_STEP, VmiFormPaths.SUMMARY_PATH);
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
      case VmiFormSteps.STATEMENT_STEP : {
        this.navigateTo(VmiFormSteps.HOUSEHOLD_STEP, VmiFormPaths.HOUSEHOLD_PATH);
        break;
      }
      case VmiFormSteps.SUMMARY_STEP : {
        this.navigateTo(VmiFormSteps.STATEMENT_STEP, VmiFormPaths.STATEMENT_PATH);
        break;
      }
    }
  }

  public subscribeToStepEmitter(componentRef: any) {
    if (componentRef instanceof PersonSearcherComponent) {
      if (this.activeStepIndex === VmiFormSteps.SEARCH_APPLICANT_STEP) {
        componentRef.searchEventEmitter.subscribe(response => {
          let data = response as DpabdResponseModel;

          this.stepperForm.data = data;
          this.stepperForm.firstStep = new VmiDataFormUi(VmiFormSteps.SEARCH_APPLICANT_STEP, 'Initializare cerere', true, true, data.person.pnc);
          this.stepperForm.secondStep = new VmiDataFormUi(VmiFormSteps.APPLICANT_INFO_STEP, 'Solicitant', false, true, new PersonModel(data.person, data.identityDocument));
          this.stepperForm.thirdStep = new VmiDataFormUi(VmiFormSteps.ADDRESS_INFO_STEP, 'Adresa', false, true, data.addresses);

          this.dataStoreService.setData(DataStoreObjects.VMI_REQUEST_FORM_DATA, this.stepperForm);
          this.navigateTo(VmiFormSteps.APPLICANT_INFO_STEP, VmiFormPaths.APPLICANT_PATH);
        });
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
    this.router.events
      .pipe(
        filter((event: NavigationEvent) => {
            return (event instanceof NavigationStart);
          }
        )
      ).subscribe((eventRouter) => {
      if (eventRouter instanceof NavigationStart && eventRouter.restoredState) {
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
          case VmiFormPaths.STATEMENT_PATH : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.STATEMENT_STEP);
            break;
          }
          case VmiFormPaths.SUMMARY_PATH : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.SUMMARY_STEP);
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
      },
      {
        id: VmiFormSteps.STATEMENT_STEP.toString(),
        label: 'Declaratie',
        command: () => {
          this.navigateTo(VmiFormSteps.STATEMENT_STEP, VmiFormPaths.STATEMENT_PATH);
        }
      },
      {
        id: VmiFormSteps.SUMMARY_STEP.toString(),
        label: 'Rezumat',
        command: () => {
          this.navigateTo(VmiFormSteps.SUMMARY_STEP, VmiFormPaths.SUMMARY_PATH);
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
