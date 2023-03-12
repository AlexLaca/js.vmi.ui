import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FamilyMemberFormComponent} from '../extended-family/extended-family-form/family-member-form.component';
import {PersonModel} from '../../../../@shared/models/person.model';
import {BehaviorSubject} from 'rxjs';
import {
  DataStoreObjects,
  KinshipDegreeIndex,
  VmiFormNavigationEvent,
  VmiFormSteps
} from '../../../../@shared/utils/constants';
import {DataStoreService} from '../../../../@core/data-store.service';
import {MenuItem, MessageService} from 'primeng/api';

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

  public items: MenuItem[];
  public applicantStatusValue: string = this.APPLICANT_STATUS_VALUE_SINGLE;

  public personObservable: BehaviorSubject<PersonModel | null> = new BehaviorSubject<PersonModel | null>(null);

  constructor(
    public dialogRef: DynamicDialogRef,
    public dialogService: DialogService,
    private messageService: MessageService,
    private dataStoreService: DataStoreService) {

    this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, VmiFormSteps.CHAPTER_3_STEP);
  }

  ngOnInit(): void {
    this.initSpeedDial();
  }

  public nextStep() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.NEXT);
  }

  public prevStep() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.PREV);
  }

  private initSpeedDial(): void {
    this.items = [
      {
        icon: 'pi pi-heart',
        command: () => {
          this.onOpenFamilyMemberDialog(KinshipDegreeIndex.PARTNER);
        }
      },
      {
        icon: 'pi pi-user',
        command: () => {
          this.onOpenFamilyMemberDialog(KinshipDegreeIndex.CHILD);
        }
      },
      {
        icon: 'pi pi-users',
        command: () => {
          this.onOpenFamilyMemberDialog(KinshipDegreeIndex.OTHER);
        }
      },
    ];
  }

  private onOpenFamilyMemberDialog(familyMemberType: KinshipDegreeIndex) {
    this.dialogRef = this.dialogService.open(FamilyMemberFormComponent, {
      data: {
        index: familyMemberType
      },
      position: 'center',
      width: '90%',
      height: '90%',
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
