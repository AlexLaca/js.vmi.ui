import {Injectable} from '@angular/core';
import {DataStoreService} from '../../../@core/data-store.service';
import {Router} from '@angular/router';
import {DataStoreObjects} from '../../../@shared/utils/constants';

@Injectable()
export class VmiFormService {

  constructor(
    private router: Router,
    private dataStoreService: DataStoreService) {
  }

  public navigateTo(index: number, url: string): void {
    // this.dataStoreService.setData(DataStoreObjects.VMI_ACTIVE_FORM_INDEX, index);
    // this.dataStoreService.refreshDataOnAllObservers();
    this.router.navigateByUrl(url);
  }
}
