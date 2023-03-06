import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FamilyMemberFormComponent} from '../../extended-family/extended-family-form/family-member-form.component';
import {PersonModel} from '../../../../@shared/models/person.model';
import {BehaviorSubject} from 'rxjs';
import {DataStoreObjects, VmiFormNavigationEvent, VmiFormSteps} from '../../../../@shared/utils/constants';
import {DataStoreService} from '../../../../@core/data-store.service';

@Component({
  selector: 'vmi-third-chapter',
  templateUrl: './third-chapter.component.html',
  styleUrls: ['./third-chapter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService, DynamicDialogRef, DynamicDialogConfig]
})
export class ThirdChapterComponent implements OnInit {

  @Output() public activeStepIndexChanged: EventEmitter<number> = new EventEmitter<number>();

  public APPLICANT_STATUS_VALUE_SINGLE: string = 'single';
  public APPLICANT_STATUS_VALUE_REPRESENTATIVE: string = 'representative';

  public applicantStatusValue: string = this.APPLICANT_STATUS_VALUE_SINGLE;

  public personObservable: BehaviorSubject<PersonModel | null> = new BehaviorSubject<PersonModel | null>(null);

  constructor(
    public dialogRef: DynamicDialogRef,
    public dialogService: DialogService,
    private dataStoreService: DataStoreService) {

    this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.CHAPTER_3_STEP);
  }

  ngOnInit(): void {
  }

  public nextStep() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.NEXT);
  }

  public prevStep() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.PREV);
  }

  public onOpenFamilyMemberDialog() {
    this.dialogRef = this.dialogService.open(FamilyMemberFormComponent, {
      position: 'center',
      width: '90%',
      height: '480px',
      header: 'Membru familie',
      showHeader: true,
      closeOnEscape: true,
    });
    this.dialogRef.onClose.subscribe((familyMember: PersonModel) => {
      if (familyMember) {
        console.log("FAMILY-MEMBER-BEFORE", familyMember);
        this.personObservable.next(familyMember);
        console.log("FAMILY-MEMBER-AFTER", familyMember);
      }
    });
  }
}
