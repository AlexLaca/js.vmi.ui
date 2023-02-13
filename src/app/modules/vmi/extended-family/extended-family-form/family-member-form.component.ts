import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormControl, FormGroup} from '@angular/forms';
import {BasePersonModel} from '../../../../@shared/models/base-person.model';

@Component({
  selector: 'vmi-extended-family-form',
  templateUrl: './family-member-form.component.html',
  styleUrls: ['./family-member-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyMemberFormComponent implements OnInit {

  public personFormGroup: FormGroup;
  public familyMember: BasePersonModel;

  constructor(
    public dialogService: DialogService,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig) {
  }

  ngOnInit(): void {

    this.personFormGroup = new FormGroup({
      lastName: new FormControl('', []),
      firstName: new FormControl('', []),
      pnc: new FormControl('', []),
      identityDocumentType: new FormControl('', []),
      documentSerial: new FormControl('', []),
      documentNumber: new FormControl('', []),
      validUntil: new FormControl('', []),
      issuedBy: new FormControl('', []),
      issuedDate: new FormControl('', []),
      citizenship: new FormControl('', []),
    });
  }

  public onSubmit() {
    this.familyMember = new BasePersonModel();

    this.familyMember.lastName = this.personFormGroup.controls['lastName'].value;
    this.familyMember.firstName = this.personFormGroup.controls['firstName'].value;
    this.familyMember.pnc = this.personFormGroup.controls['pnc'].value;
    this.familyMember.identityDocumentType = this.personFormGroup.controls['identityDocumentType'].value;
    this.familyMember.documentSerial = this.personFormGroup.controls['documentSerial'].value;
    this.familyMember.documentNumber = this.personFormGroup.controls['documentNumber'].value;
    this.familyMember.validUntil = this.personFormGroup.controls['validUntil'].value;
    this.familyMember.issuedBy = this.personFormGroup.controls['issuedBy'].value;
    this.familyMember.issuedDate = this.personFormGroup.controls['issuedDate'].value;

    this.dialogRef.close(this.familyMember);
  }

  public onQuit() {
    this.dialogRef.close(null);
  }
}

