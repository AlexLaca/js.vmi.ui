import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {VmiRequestModel} from '../../../@shared/models/vmi-request.model';
import {Router} from '@angular/router';

@Component({
  selector: 'vmi-list',
  templateUrl: './vmi-list.component.html',
  styleUrls: ['./vmi-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VmiListComponent implements OnInit {

  demands: Array<VmiRequestModel> = [];

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {

  }

  public onView(serial: string) {
    this.router.navigate(['vmi/list/' + serial])
  }

}
