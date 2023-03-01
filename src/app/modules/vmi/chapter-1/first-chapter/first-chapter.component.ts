import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'vmi-first-chapter',
  templateUrl: './first-chapter.component.html',
  styleUrls: ['./first-chapter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FirstChapterComponent implements OnInit {
  public residenceAddressCheckbox: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    console.log("INIT chapter - 1")
  }

}
