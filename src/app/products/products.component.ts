import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products : any;
  public keyword: string ="";
  constructor() {
  }
  ngOnInit() {
    this.products = [
      {"id": 1, "name": "Computer", "price":4300},
      {"id": 2, "name": "Printer", "price":1200},
      {"id": 3, "name": "SmartPhone", "price":7800},
      {"id": 4, "name": "Mouse", "price":450}
    ];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
  }

  search() {
    this.products = this.products.filter((p:any)=>p.name.includes(this.keyword));

    /*console.log(this.keyword);
    let result = [];
    for (let p of this.products){
      if (p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.products= result;*/
  }
}
