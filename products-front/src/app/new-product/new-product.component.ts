import { AppComponent } from './../app.component';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  product = {name:'',  price:'', description:''}
  constructor(private api: ApiService, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  save(){
    this.api.saveNewProduct(this.product).subscribe({
      next: (data) => {
        this.appComponent.products.push(data);
      },
      error: (error) => {
        console.log('aconteceu um erro')
      }

    })
    

  }

}