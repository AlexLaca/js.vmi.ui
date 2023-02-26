import {Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {PersonModel} from '../../../@shared/models/person.model';
import {BehaviorSubject} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {FamilyMemberFormComponent} from '../extended-family/extended-family-form/family-member-form.component';

@Component({
  selector: 'vmi-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss'],
  providers: [DialogService, DynamicDialogRef, DynamicDialogConfig]
})
export class HouseholdComponent implements OnInit {


  public APPLICANT_STATUS_VALUE_SINGLE: string = 'single';
  public APPLICANT_STATUS_VALUE_REPRESENTATIVE: string = 'representative';


  public person: PersonModel;
  public formGroup: FormGroup;
  public homeAddressCheckbox: boolean = true;
  public applicantStatusValue: string = this.APPLICANT_STATUS_VALUE_SINGLE;

  public personObservable: BehaviorSubject<PersonModel | null> = new BehaviorSubject<PersonModel | null>(null);

  constructor( public dialogService: DialogService,
               public dialogRef: DynamicDialogRef) {
  }

  ngOnInit(): void {

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
