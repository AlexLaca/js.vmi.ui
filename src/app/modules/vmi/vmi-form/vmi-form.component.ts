import {
  AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {
  ActiveWorkflowIndex,
  DataStoreObjects,
  VmiFormNavigationEvent,
  VmiFormPaths,
  VmiFormSteps
} from '../../../@shared/utils/constants';
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
import {VmiFormService} from './vmi-form.service';
import {FirstChapterComponent} from '../chapter-1/first-chapter/first-chapter.component';
import {SecondChapterComponent} from '../chapter-2/second-chapter/second-chapter.component';
import {ThirdChapterComponent} from '../chapter-3/third-chapter/third-chapter.component';


@Component({
  selector: 'vmi-form',
  templateUrl: './vmi-form.component.html',
  styleUrls: ['./vmi-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class VmiFormComponent implements OnInit, AfterViewChecked {

  public activeStepIndex: number = 0;
  public showSubmitButton: boolean = false;

  public steps: MenuItem[];
  public vmiRequest: VmiRequestModel;
  public stepperForm: VmiStepperFormUi;

  public subscriptionDS: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef,
    private dataStoreService: DataStoreService,
    private vmiFormService: VmiFormService) {

    this.subscribeToRouterEvents();
    this.subscribeToDataStoreService();
  }


  ngOnInit(): void {
    this.initSteps();
    this.stepperForm = new VmiStepperFormUi();
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  public onSubmit() {

  }

  public subscribeToStepEmitter(componentRef: any) {
    if (componentRef instanceof FirstChapterComponent) {
      componentRef.activeStepIndexChanged.subscribe(eventType => {
        switch (eventType) {
          case VmiFormNavigationEvent.NEXT:
            this.activeStepIndex = VmiFormSteps.CHAPTER_2_STEP;
            this.router.navigateByUrl(VmiFormPaths.CHAPTER_2_PATH);
            break
          case VmiFormNavigationEvent.CANCEL:
            this.router.navigateByUrl("/");
            break;
        }
      });
    } else if (componentRef instanceof SecondChapterComponent) {
      componentRef.activeStepIndexChanged.subscribe(eventType => {
        switch (eventType) {
          case VmiFormNavigationEvent.NEXT:
            this.activeStepIndex = VmiFormSteps.CHAPTER_3_STEP;
            this.router.navigateByUrl(VmiFormPaths.HOUSEHOLD_PATH);
            break;
          case VmiFormNavigationEvent.PREV:
            this.activeStepIndex = VmiFormSteps.CHAPTER_1_STEP;
            this.router.navigateByUrl(VmiFormPaths.CHAPTER_1_PATH);
            break;
        }
      });
    } else if (componentRef instanceof ThirdChapterComponent) {
      componentRef.activeStepIndexChanged.subscribe(eventType => {
        switch (eventType) {
          case VmiFormNavigationEvent.NEXT:
            this.activeStepIndex = VmiFormSteps.STATEMENT_STEP;
            this.router.navigateByUrl(VmiFormPaths.STATEMENT_PATH);
            break;
          case VmiFormNavigationEvent.PREV:
            this.activeStepIndex = VmiFormSteps.CHAPTER_2_STEP;
            this.router.navigateByUrl(VmiFormPaths.CHAPTER_2_PATH);
            break;
        }
      });
    }


    // if (componentRef instanceof PersonSearcherComponent) {
    //
    //   if (this.activeStepIndex === VmiFormSteps.SEARCH_APPLICANT_STEP) {
    //     componentRef.searchEventEmitter.subscribe(response => {
    //       let data = response as DpabdResponseModel;
    //
    //       this.stepperForm.data = data;
    //       this.stepperForm.firstStep = new VmiDataFormUi(VmiFormSteps.SEARCH_APPLICANT_STEP, 'Initializare cerere', true, true, data.person.pnc);
    //       this.stepperForm.secondStep = new VmiDataFormUi(VmiFormSteps.APPLICANT_INFO_STEP, 'Solicitant', false, true, new PersonModel(data.person, data.identityDocument));
    //       this.stepperForm.thirdStep = new VmiDataFormUi(VmiFormSteps.BENEFICIARY_INFO_STEP, 'Adresa', false, true, data.addresses);
    //
    //       this.dataStoreService.setData(DataStoreObjects.VMI_REQUEST_FORM_DATA, this.stepperForm);
    //       this.vmiFormService.navigateTo(VmiFormSteps.APPLICANT_INFO_STEP, VmiFormPaths.APPLICANT_PATH);
    //     });
    //   }
    // }
  }

  // public nextStep() {
  //   switch (this.activeStepIndex) {
  //     case VmiFormSteps.APPLICANT_INFO_STEP : {
  //       this.vmiFormService.navigateTo(VmiFormSteps.BENEFICIARY_INFO_STEP, VmiFormPaths.BENEFICIARY_PATH);
  //       break;
  //     }
  //     case VmiFormSteps.BENEFICIARY_INFO_STEP : {
  //       this.vmiFormService.navigateTo(VmiFormSteps.HOUSEHOLD_STEP, VmiFormPaths.HOUSEHOLD_PATH);
  //       break;
  //     }
  //     case VmiFormSteps.HOUSEHOLD_STEP : {
  //       this.showSubmitButton = true;
  //       this.vmiFormService.navigateTo(VmiFormSteps.STATEMENT_STEP, VmiFormPaths.STATEMENT_PATH);
  //       break;
  //     }
  //     case VmiFormSteps.STATEMENT_STEP : {
  //       this.vmiFormService.navigateTo(VmiFormSteps.SUMMARY_STEP, VmiFormPaths.SUMMARY_PATH);
  //       break;
  //     }
  //   }
  // }

  // public prevStep() {
  //   switch (this.activeStepIndex) {
  //     case VmiFormSteps.APPLICANT_INFO_STEP : {
  //       this.vmiFormService.navigateTo(VmiFormSteps.SEARCH_APPLICANT_STEP, VmiFormPaths.REQUEST_PATH);
  //       break;
  //     }
  //     case VmiFormSteps.BENEFICIARY_INFO_STEP : {
  //       this.vmiFormService.navigateTo(VmiFormSteps.APPLICANT_INFO_STEP, VmiFormPaths.APPLICANT_PATH);
  //       break;
  //     }
  //     case VmiFormSteps.HOUSEHOLD_STEP : {
  //       this.vmiFormService.navigateTo(VmiFormSteps.BENEFICIARY_INFO_STEP, VmiFormPaths.BENEFICIARY_PATH);
  //       break;
  //     }
  //     case VmiFormSteps.STATEMENT_STEP : {
  //       this.vmiFormService.navigateTo(VmiFormSteps.HOUSEHOLD_STEP, VmiFormPaths.HOUSEHOLD_PATH);
  //       break;
  //     }
  //     case VmiFormSteps.SUMMARY_STEP : {
  //       this.vmiFormService.navigateTo(VmiFormSteps.STATEMENT_STEP, VmiFormPaths.STATEMENT_PATH);
  //       break;
  //     }
  //   }
  // }


  private subscribeToDataStoreService(): void {
    this.subscriptionDS = this.dataStoreService.getObservableForDataChange().subscribe((dataStoreObject: any) => {
      if (!dataStoreObject.hasOwnProperty(DataStoreObjects.ACTIVE_WORKFLOW_INDEX)) {
        this.dataStoreService.setData(DataStoreObjects.ACTIVE_WORKFLOW_INDEX, ActiveWorkflowIndex.VMI_REQUEST_FORM);
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
          case VmiFormPaths.CHAPTER_1_PATH : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.CHAPTER_1_STEP);
            break;
          }
          case VmiFormPaths.CHAPTER_2_PATH : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.CHAPTER_2_STEP);
            console.log("CASE");
            break;
          }
          case VmiFormPaths.HOUSEHOLD_PATH : {
            this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.CHAPTER_3_STEP);
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
        id: VmiFormSteps.CHAPTER_1_STEP.toString(),
        label: 'Solicitant',
        command: () => {
          this.vmiFormService.navigateTo(VmiFormSteps.CHAPTER_1_STEP, VmiFormPaths.CHAPTER_1_PATH);
        }
      },
      {
        id: VmiFormSteps.CHAPTER_2_STEP.toString(),
        label: 'Beneficiar',
        command: () => {
          this.vmiFormService.navigateTo(VmiFormSteps.CHAPTER_2_STEP, VmiFormPaths.CHAPTER_2_PATH);
        }
      },
      {
        id: VmiFormSteps.CHAPTER_3_STEP.toString(),
        label: 'Membrii',
        command: () => {
          this.vmiFormService.navigateTo(VmiFormSteps.CHAPTER_3_STEP, VmiFormPaths.HOUSEHOLD_PATH);
        }
      },
      {
        id: VmiFormSteps.STATEMENT_STEP.toString(),
        label: 'Declaratie',
        command: () => {
          this.vmiFormService.navigateTo(VmiFormSteps.STATEMENT_STEP, VmiFormPaths.STATEMENT_PATH);
        }
      },
      {
        id: VmiFormSteps.SUMMARY_STEP.toString(),
        label: 'Rezumat',
        command: () => {
          this.vmiFormService.navigateTo(VmiFormSteps.SUMMARY_STEP, VmiFormPaths.SUMMARY_PATH);
        }
      }
    ];
  }


}
