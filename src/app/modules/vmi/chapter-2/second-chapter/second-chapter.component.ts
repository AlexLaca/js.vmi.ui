import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'vmi-second-chapter',
  templateUrl: './second-chapter.component.html',
  styleUrls: ['./second-chapter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecondChapterComponent implements OnInit {
  public residenceAddressCheckbox: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
