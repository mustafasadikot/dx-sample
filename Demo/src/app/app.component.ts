import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _router: Router){

  }

  title = 'app';
  private navOptions = [
    { text: "Home", icon: "home", route: "dashboard" },
    { text: "Material flow", icon: "home", route: "materialflow" }
  ]
  private onItemClick = (event) => {    
    this._router.navigateByUrl(event.itemData.route)
  }
}
