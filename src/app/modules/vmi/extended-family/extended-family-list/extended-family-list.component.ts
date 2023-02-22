import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BasePersonModel} from '../../../../@shared/models/base-person.model';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'vmi-extended-family-list',
  templateUrl: './extended-family-list.component.html',
  styleUrls: ['./extended-family-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExtendedFamilyListComponent implements OnInit {

  @Input() public personObservable: BehaviorSubject<BasePersonModel | null>;

  public persons: Array<BasePersonModel> = [];

  ngOnInit(): void {
    if (this.personObservable) {
      this.personObservable.asObservable().subscribe(value => {

        if (value) {
          this.persons.push(value);
        }

      });
    }

  }

  onRemovePerson(index: number) {
    this.persons.splice(index, 1);
  }
}
