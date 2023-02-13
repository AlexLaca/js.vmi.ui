import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DemandModel} from '../../../@shared/models/demand.model';
import {Router} from '@angular/router';

@Component({
  selector: 'vmi-list',
  templateUrl: './vmi-list.component.html',
  styleUrls: ['./vmi-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VmiListComponent implements OnInit {

  demands: Array<DemandModel> = [];

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    this.demands.push(new DemandModel(1, '124522', 'CREATA', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new DemandModel(2, '345343', 'DRAFT', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new DemandModel(3, '123424', 'CREATA', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new DemandModel(4, '124522', 'CREATA', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new DemandModel(5, '124342', 'DRAFT', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new DemandModel(6, '124522', 'CREATA', '190030522789', 'Vrancea', '11/02/2023'));
    this.demands.push(new DemandModel(7, '465554', 'DRAFT', '190030522789', 'Vrancea', '11/02/2023'));
  }

  public onView(serial: string) {
    this.router.navigate(['vmi/list/' + serial])
  }

}
