import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {PersonModel} from '../models/person.model';
import {FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FamilyMemberFormComponent} from '../extended-family/extended-family-form/family-member-form.component';
import {BehaviorSubject} from 'rxjs';


@Component({
    selector: 'vmi-form',
    templateUrl: './vmi-form.component.html',
    styleUrls: ['./vmi-form.component.scss'],
    encapsulation: ViewEncapsulation.None,

    providers: [DialogService, DynamicDialogRef, DynamicDialogConfig]
})
export class VmiFormComponent implements OnInit {

    public APPLICANT_STATUS_VALUE_SINGLE: string = 'single';
    public APPLICANT_STATUS_VALUE_REPRESENTATIVE: string = 'representative';

    public person: PersonModel = new PersonModel();
    public formGroup: FormGroup;
    public homeAddressCheckbox: boolean = true;
    public applicantStatusValue: string = this.APPLICANT_STATUS_VALUE_SINGLE;

    public personObservable: BehaviorSubject<PersonModel | null> = new BehaviorSubject<PersonModel | null>(null);


    constructor(
        public dialogService: DialogService,
        public dialogRef: DynamicDialogRef,
        private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.homeAddressCheckbox = true;
    }

    public onSubmit() {

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
