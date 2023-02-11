import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'vmi-vmi-detail',
  templateUrl: './vmi-detail.component.html',
  styleUrls: ['./vmi-detail.component.scss']
})
export class VmiDetailComponent implements OnInit {

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['vmi/list'])
  }

}
