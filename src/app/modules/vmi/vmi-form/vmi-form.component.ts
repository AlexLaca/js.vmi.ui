import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PersonModel} from '../models/person.model';
import {FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {FamilyMemberFormComponent} from '../extended-family/extended-family-form/family-member-form.component';

@Component({
  selector: 'vmi-form',
  templateUrl: './vmi-form.component.html',
  styleUrls: ['./vmi-form.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [DialogService]
})
export class VmiFormComponent implements OnInit {

  public APPLICANT_STATUS_VALUE_SINGLE : string = 'single';
  public APPLICANT_STATUS_VALUE_REPRESENTATIVE : string = 'representative';

  public person: PersonModel;
  public formGroup: FormGroup;
  public homeAddressCheckbox: boolean = true;
  public applicantStatusValue: string = this.APPLICANT_STATUS_VALUE_SINGLE;

  constructor(
    public dialogService: DialogService,
    private translateService: TranslateService) {}

  ngOnInit(): void {
    this.homeAddressCheckbox = true;
  }

  public onSubmit() {

  }

  public onOpenFamilyMemberDialog() {
    const ref = this.dialogService.open(FamilyMemberFormComponent, {
      position: 'center',
      width: '80%',
      height: '23%',
      header: 'Membru familie',
      showHeader: true,
      closeOnEscape: true

  });
  }

}
