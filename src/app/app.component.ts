import { Component } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
}

// $.get("https://localhost:7035/api/product", products => {
//   console.log(products);
// });