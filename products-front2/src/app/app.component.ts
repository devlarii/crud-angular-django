import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'products-front';

  selected_product = {id: 0, name: '', description: ''}
  
  products = [
    {
      name: 'Product 01',
      id: 1,
      description: 'tenis',
      photo: 'http://www.minhapp.com/photo1',
    },
    {
      name: 'Product 02',
      id: 2,
      description: 'sapato',
      photo: 'http://www.minhapp.com/photo2',
    },
    {
      name: 'Product 03',
      id: 3,
      description: 'alpergata',
      photo: 'http://www.minhapp.com/photo3',
    },
  ];

  constructor(private api: ApiService) {
    this.getProducts();
  }

  getProducts = () =>  {
    this.api.getAllPorducts().subscribe({
      next: data => {
        this.products = data
      },
      error: error => {
        console.log("aconteceu um erro", error.message)
      }
    }
    );
  }

  productClicked = (product: { id: number; }) => {
    this.api.getPorduct(product.id).subscribe({
      next: data => {
        console.log(data);
        this.selected_product = data
        // this.products = data
      },
      error: error => {
        console.log("aconteceu um erro", error.message)
        
      }
    })   
      
    
  
  }
}
