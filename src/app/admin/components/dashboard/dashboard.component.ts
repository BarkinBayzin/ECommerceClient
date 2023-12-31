import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent{
  constructor(private alertify: AlertifyService, spinner: NgxSpinnerService){
    super(spinner);
  }
  
  ngOnInit(): void{
    this.showSpinner(SpinnerType.BallScaleMultiple)
  }

  m(){
    this.alertify.message("Merhaba", {//Obje gibi davranabilmek için Partial olarak tanımladık serviste
      messageType: MessageType.Success,
      delay:5,
      position:Position.TopRight
    })
  }

  d(){
    this.alertify.dismiss();
  }
}
