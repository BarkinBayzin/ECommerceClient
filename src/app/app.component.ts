import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastrService: CustomToastrService){
    toastrService.message("Hello","Barkın",{
      messageType:ToastrMessageType.Info, 
      position:ToastrPosition.TopCenter});
    toastrService.message("Hello","Barkın",{
        messageType:ToastrMessageType.Error, 
        position:ToastrPosition.TopCenter});
        toastrService.message("Hello","Barkın",{
          messageType:ToastrMessageType.Success, 
          position:ToastrPosition.TopCenter});
          toastrService.message("Hello","Barkın",{
            messageType:ToastrMessageType.Warning, 
            position:ToastrPosition.TopCenter});
  }
}