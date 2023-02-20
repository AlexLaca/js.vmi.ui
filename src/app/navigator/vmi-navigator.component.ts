import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';
import {ActiveWorkflowIndex, DataStoreObjects} from '../@shared/utils/constants';
import {DataStoreService} from '../@core/data-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'vmi-navigator',
  templateUrl: './vmi-navigator.component.html',
  styleUrls: ['./vmi-navigator.component.scss']
})
export class VmiNavigatorComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(
    private router: Router,
    private dataStoreService: DataStoreService,
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService.get('navigator').subscribe(() => {
      this.items = [
        {
          id: ActiveWorkflowIndex.VMI_LANDING_PAGE.toString(),
          label: this.translateService.instant('navigator.home'),
          icon: PrimeIcons.HOME,
          command: () => {
            this.dataStoreService.setData(DataStoreObjects.ACTIVE_WORKFLOW_INDEX, ActiveWorkflowIndex.VMI_LANDING_PAGE);
            this.router.navigateByUrl('/');
          }
        },
        {
          id: ActiveWorkflowIndex.VMI_REQUEST_FORM.toString(),
          label: this.translateService.instant('navigator.vmi-request'),
          icon: PrimeIcons.FILE,
          command: () => {
            /*this.dataStoreService.setData(DataStoreObjects.ACTIVE_WORKFLOW_INDEX, ActiveWorkflowIndex.VMI_REQUEST_FORM);*/
            this.router.navigateByUrl('vmi/request');
          }
        },
        {
          id: ActiveWorkflowIndex.VMI_REQUEST_LIST.toString(),
          label: this.translateService.instant('navigator.request-list'),
          icon: PrimeIcons.BOOK,
          command: () => {
            this.dataStoreService.setData(DataStoreObjects.ACTIVE_WORKFLOW_INDEX, ActiveWorkflowIndex.VMI_REQUEST_LIST);
            this.router.navigateByUrl('vmi/list');
          },
        }
      ];
    });
  }
}
