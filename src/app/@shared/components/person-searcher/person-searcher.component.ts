import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {pncValidatorFn} from '../../validators/input-validator.function';
import {SearchService} from '../../services/search-service';
import {DataStoreService} from '../../../@core/data-store.service';

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

  constructor(private searchService: SearchService,
              private dataStoreService: DataStoreService) {
  }

  ngOnInit(): void {
    this.pncFromGroup = new FormGroup({
      pnc: new FormControl('', [pncValidatorFn()]),
    });
  }

  public onSubmit() {
    this.searchService.searchPerson('1900305330228').subscribe(result => {
      console.log('RESPONSE FROM SERVER', result);
      if (result) {
        this.searchEventEmitter.emit(result);
      }
    });
  }
}
