import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private alertify: AlertifyService){}
  
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
