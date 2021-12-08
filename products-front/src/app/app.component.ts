import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'products-front';

  selected_product = {id: 0, name: '', description: '', price: '', photo: ''}
  
  products = [
    {
      name: 'Product 01',
      id: 1,
      description: 'tenis',
      price: 'R$ 29.99',
      photo: 'http://www.minhapp.com/photo1',
    },
    {
      name: 'Product 02',
      id: 2,
      description: 'sapato',
      price: 'R$ 29.99',
      photo: 'http://www.minhapp.com/photo2',
    },
    {
      name: 'Product 03',
      id: 3,
      description: 'alpergata',
      price: 'R$ 29.99',
      photo: 'http://www.minhapp.com/photo3',
    },
  ];

  constructor(private api: ApiService, private router: Router) {
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
    this.router.navigate(['product-detail', product.id]);
      
    
  
  }
}
