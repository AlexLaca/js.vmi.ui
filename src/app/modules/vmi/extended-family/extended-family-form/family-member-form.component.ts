import {Component, ElementRef, Inject, LOCALE_ID, OnInit, ViewEncapsulation} from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BasePersonModel} from '../../../../@shared/models/base-person.model';
import {IdentityDocumentModel} from '../../../../@shared/models/identity-document.model';
import {pncValidatorFn} from '../../../../@shared/validators/input-validator.function';
import {SearchService} from '../../../../@shared/services/search-service';
import {DpabdResponseModel} from '../../../../@shared/models/dpabd-response.model';
import {PersonModel} from '../../../../@shared/models/person.model';
import {DictionaryModel} from '../../../../@shared/models/dictionary.model';

@Component({
  selector: 'vmi-extended-family-form',
  templateUrl: './family-member-form.component.html',
  styleUrls: ['./family-member-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilyMemberFormComponent implements OnInit {

  public readonly: boolean = true;

  public pncFromGroup: FormGroup;
  public personFormGroup: FormGroup;

  public familyMember: PersonModel;
  public identityDocument: IdentityDocumentModel;

  constructor(
    public dialogService: DialogService,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
    private searchService: SearchService,
    private elementRef: ElementRef,
    @Inject(LOCALE_ID) private locale: string) {
  }

  ngOnInit(): void {

    this.pncFromGroup = new FormGroup({
      pnc: new FormControl('', [pncValidatorFn()]),
    });

    this.personFormGroup = new FormGroup({
      personPnc: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      firstName: new FormControl(''),
      serial: new FormControl(''),
      serialNr: new FormControl(''),
      issuedBy: new FormControl(''),
      documentType: new FormControl(''),
      validUntil: new FormControl(''),
      issueDate: new FormControl(''),
    });
  }

  public onSearch() {
    this.searchService.searchPerson(this.pncFromGroup.controls['pnc'].value).subscribe(response => {
      if (response) {
        let data = response as DpabdResponseModel;
        this.personFormGroup.controls['personPnc'].setValue(data.person.pnc);
        this.personFormGroup.controls['lastName'].setValue(data.person.lastName);
        this.personFormGroup.controls['firstName'].setValue(data.person.firstName);
        this.personFormGroup.controls['serial'].setValue(data.identityDocument.serial);
        this.personFormGroup.controls['serialNr'].setValue(data.identityDocument.serialNr);
        this.personFormGroup.controls['issuedBy'].setValue(data.identityDocument.issuedBy);
        this.personFormGroup.controls['documentType'].setValue(data.identityDocument.documentType.value);
        this.personFormGroup.controls['validUntil'].setValue(data.identityDocument.validUntil);
        this.personFormGroup.controls['issueDate'].setValue(data.identityDocument.issueDate);
      }
    });
  }

  public onSubmit() {
    if (this.personFormGroup.valid) {
      console.log('PARENT_ELEMENT', this.elementRef.nativeElement.parentElement);
      let controls = this.personFormGroup.controls;

      this.familyMember = new PersonModel(
        new BasePersonModel(
          controls['lastName'].value,
          controls['firstName'].value,
          controls['personPnc'].value),

        new IdentityDocumentModel(
          new DictionaryModel(1, controls['lastName'].value),
          controls['serial'].value,
          controls['serialNr'].value,
          controls['issuedBy'].value,
          controls['issueDate'].value,
          controls['validUntil'].value)
      );
      this.dialogRef.close(this.familyMember);
    }
  }

  public onQuit() {
    this.dialogRef.close(null);
  }
}

