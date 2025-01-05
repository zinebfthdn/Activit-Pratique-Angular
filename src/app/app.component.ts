import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstApp';
  public currentRoute : any;
  constructor(private router: Router) {
  }

  gotoProducts() {
    this.currentRoute="products";
    this.router.navigateByUrl("/products");
  }

  gotoHome() {
    this.currentRoute="home";
    this.router.navigateByUrl("/home");
  }
}
