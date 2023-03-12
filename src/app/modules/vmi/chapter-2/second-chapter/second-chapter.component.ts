import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {
  DataStoreObjects,
  VmiFormNavigationEvent,
  VmiFormPaths,
  VmiFormSteps
} from '../../../../@shared/utils/constants';
import {Router} from '@angular/router';
import {DataStoreService} from '../../../../@core/data-store.service';
import {PersonDetailConfig} from '../../../../@shared/components/person-detail/person-detail.config';

@Component({
  selector: 'vmi-second-chapter',
  templateUrl: './second-chapter.component.html',
  styleUrls: ['./second-chapter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecondChapterComponent implements OnInit {


  @Output() public activeStepIndexChanged: EventEmitter<number> = new EventEmitter<number>();

  public residenceAddressCheckbox: boolean = true;
  public personViewConfig: PersonDetailConfig;

  constructor(
    private router: Router,
    private dataStoreService: DataStoreService) {

    this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.CHAPTER_2_STEP);
  }

  ngOnInit(): void {
    console.log(
      'SecondChapterComponent_onInit_VMI_ACTIVE_FORM_INDEX',
      this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_ACTIVE_FORM_INDEX));

    this.personViewConfig = new PersonDetailConfig(false,true, true, true, true, true, true);
  }

  public nextStep() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.NEXT);
  }

  public prevStep() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.PREV);
  }
}
