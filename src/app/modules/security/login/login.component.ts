import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {DataStoreService} from '../../../@core/data-store.service';
import {DataStoreObjects} from '../../../@shared/utils/constants';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'vmi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private messageService: MessageService,
    private dataStoreService: DataStoreService,
    ) {
  }

  public value1: string = '';
  public formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public onConnect() {
    if (this.formGroup.valid) {
      console.log('VALID LOGIN');
      if (
        this.formGroup.controls['user'].value === 'admin' &&
        this.formGroup.controls['user'].value === 'admin') {
        window.sessionStorage.setItem('vmiApp', this.formGroup.controls['user'].value);
        this.dataStoreService.setData(
          DataStoreObjects.VMI_USER,
          {
            user: this.formGroup.controls['user'].value,
            password: this.formGroup.controls['password'].value
          });
        this.dataStoreService.refreshDataOnAllObservers();

        this.router.navigateByUrl('/');
      } else {
        this.messageService.add({severity: 'error', summary: 'Conectare esuata', detail:'Utilizator sau parola incorecta'})
      }
    }
  }
}
