import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {VmiFormNavigationEvent} from '../../../../@shared/utils/constants';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'vmi-fourth-chapter',
  templateUrl: './fourth-chapter.component.html',
  styleUrls: ['./fourth-chapter.component.scss']
})
export class FourthChapterComponent implements OnInit {

  @Output() public activeStepIndexChanged: EventEmitter<number> = new EventEmitter<number>();
  public formGroup: FormGroup;

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      houseRooms: new FormControl('')
    });
  }

  public nextStep() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.NEXT);
  }

  public prevStep() {
    this.activeStepIndexChanged.emit(VmiFormNavigationEvent.PREV);
  }

  public onSubmit() {

  }
}
