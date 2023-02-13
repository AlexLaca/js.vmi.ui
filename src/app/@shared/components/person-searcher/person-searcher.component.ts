import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {PersonModel} from '../../models/person.model';
import {FormControl, FormGroup} from '@angular/forms';
import {pncValidatorFn} from '../../validators/input-validator.function';

@Component({
  selector: 'vmi-person-searcher',
  templateUrl: './person-searcher.component.html',
  styleUrls: ['./person-searcher.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonSearcherComponent implements OnInit {
  public pnc: string = '';
  public pncFromGroup: FormGroup;

  @Output() searchPersonModelChanged: EventEmitter<PersonModel> = new EventEmitter<PersonModel>();

  constructor() {
  }

  ngOnInit(): void {
    this.pncFromGroup = new FormGroup({
      pnc: new FormControl('', [pncValidatorFn()]),
    });
  }

  public onSubmit() {

  }
}
