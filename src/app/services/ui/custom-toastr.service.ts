import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) {}

  message(message:string, title: string, toasterOptions: Partial<ToastrOptions>){
    this.toastr[toasterOptions.messageType](message, title, {
      positionClass : toasterOptions.position
    });
  }
}

export class ToastrOptions{
  messageType: ToastrMessageType
  position: ToastrPosition
}

export enum ToastrMessageType{
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}

export enum ToastrPosition{
  TopRight = "toast-top-right",
  TopLeft = "toast-top-left",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"
}
