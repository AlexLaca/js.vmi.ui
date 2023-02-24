import {Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {pncValidatorFn} from '../../validators/input-validator.function';
import {SearchService} from '../../services/search-service';

@Component({
  selector: 'vmi-person-searcher',
  templateUrl: './person-searcher.component.html',
  styleUrls: ['./person-searcher.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonSearcherComponent implements OnInit {
  public pnc: string = '';
  public pncFromGroup: FormGroup;

  public searchEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.pncFromGroup = new FormGroup({
      pnc: new FormControl('', [pncValidatorFn()]),
    });
  }

  public onSubmit() {
    this.searchService.searchPerson('1900305330228').subscribe(result => {
      this.searchEventEmitter.emit(result);
    });
  }
}
