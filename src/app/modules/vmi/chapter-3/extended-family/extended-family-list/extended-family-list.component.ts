import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PersonModel} from '../../../../../@shared/models/person.model';


@Component({
  selector: 'vmi-extended-family-list',
  templateUrl: './extended-family-list.component.html',
  styleUrls: ['./extended-family-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExtendedFamilyListComponent implements OnInit {

  @Input() public personObservable: BehaviorSubject<PersonModel | null>;

  public values: Array<PersonModel> = [];

  ngOnInit(): void {
    if (this.personObservable) {
      this.personObservable.asObservable().subscribe(value => {

        if (value) {
          this.values.push(value);
        }
      });
    }

  }

  onRemovePerson(index: number) {
    this.values.splice(index, 1);
  }
}
