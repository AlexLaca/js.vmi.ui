import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataStoreObjects} from './@shared/utils/constants';
import {DataStoreService} from './@core/data-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'vmi-root',
  templateUrl: './vmi.component.html',
  styleUrls: ['./vmi.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VmiComponent implements OnInit {
  public title: string = 'vmi';
  public showNavigator: boolean = false;

  constructor(
    private router: Router,
    private dataStoreService: DataStoreService) {


    this.dataStoreService.getObservableForDataChange().subscribe(value => {
      if (this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_USER)) {
        this.showNavigator = true;
      }
    });

  }

  ngOnInit(): void {
    console.log("INIT APP", window.sessionStorage.getItem('vmiApp'));
    console.log("SHOW_NAVIGATOR", this.showNavigator);
    if (this.dataStoreService.getDataDirectly(DataStoreObjects.VMI_USER)) {
      this.showNavigator = true;
    }
    if (window.sessionStorage.getItem('vmiApp') !== null) {
      this.showNavigator = true;
    }
    if (window.sessionStorage.getItem('vmiApp') === null) {
      this.router.navigateByUrl('/login');
    }
  }
}
