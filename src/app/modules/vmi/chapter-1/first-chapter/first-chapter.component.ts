import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {
  DataStoreObjects,
  VmiEvents,
  VmiFormNavigationEvent,
  VmiFormPaths,
  VmiFormSteps
} from '../../../../@shared/utils/constants';
import {VmiFormService} from '../../vmi-form/vmi-form.service';
import {Router} from '@angular/router';
import {DataStoreService} from '../../../../@core/data-store.service';
import {EventStepNavigationModel} from '../../../../@shared/models/ui/event-step-navigation.model';

@Component({
  selector: 'vmi-first-chapter',
  templateUrl: './first-chapter.component.html',
  styleUrls: ['./first-chapter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FirstChapterComponent implements OnInit {

  public residenceAddressCheckbox: boolean = true;

  @Output() public activeStepIndexChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private router: Router,
    private vmiFormService: VmiFormService,
    private dataStoreService: DataStoreService) {
    this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.CHAPTER_1_STEP);
  }

  ngOnInit(): void {
    console.log(
      'FirstChapterComponent_onInit_VMI_ACTIVE_FORM_INDEX',
      this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_ACTIVE_FORM_INDEX));
  }

  public nextStep() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.NEXT);
  }

  public cancelRequest() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.CANCEL);
  }
}
