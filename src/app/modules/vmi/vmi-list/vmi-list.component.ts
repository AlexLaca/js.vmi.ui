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
    this.demands.push(new VmiRequestModel(1, '124522', 'CREATA', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new VmiRequestModel(2, '345343', 'DRAFT', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new VmiRequestModel(3, '123424', 'CREATA', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new VmiRequestModel(4, '124522', 'CREATA', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new VmiRequestModel(5, '124342', 'DRAFT', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new VmiRequestModel(6, '124522', 'CREATA', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new VmiRequestModel(7, '465554', 'DRAFT', '190030522789', 'Vrancea', '11/02/2023'));
  }

  public onView(serial: string) {
    this.router.navigate(['vmi/list/' + serial])
  }

}
