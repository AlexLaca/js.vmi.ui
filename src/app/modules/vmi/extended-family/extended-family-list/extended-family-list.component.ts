import {Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PersonModel} from '../../models/person.model';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'vmi-extended-family-list',
  templateUrl: './extended-family-list.component.html',
  styleUrls: ['./extended-family-list.component.scss']
})
export class ExtendedFamilyListComponent implements OnInit {

  @Input() public personObservable: BehaviorSubject<PersonModel | null>;

  public persons: Array<PersonModel> = [];

  ngOnInit(): void {
    this.personObservable.asObservable().subscribe(value => {

      if (value) {
        console.log("PERSON_OBSERVER FROM FAMILY -COMPONENT", value);
        this.persons.push(value);
      }

    });
  }
}
