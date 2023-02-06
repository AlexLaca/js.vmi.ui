import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'vmi-navigator',
  templateUrl: './vmi-navigator.component.html',
  styleUrls: ['./vmi-navigator.component.scss']
})
export class VmiNavigatorComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService.get('navigator').subscribe(() => {
      this.items = [
        {
          label: this.translateService.instant('navigator.home'),
          icon: PrimeIcons.HOME,
          routerLink: ['/']
        },
        {
          label: this.translateService.instant('navigator.financial-aid'),
          icon: PrimeIcons.FILE,
          routerLink: ['vmi/demand']
        }
      ];
    });
  }
}
