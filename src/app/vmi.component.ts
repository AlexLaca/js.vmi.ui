import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'vmi-root',
  templateUrl: './vmi.component.html',
  styleUrls: ['./vmi.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VmiComponent {
  title = 'vmi';
}
