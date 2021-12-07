import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }
  selected_product = { name: '', description: ''}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    
    const id  = +this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.api.getPorduct(id).subscribe({
      next: data => {
        console.log(data);
        this.selected_product = data
        
      },
      error: error => {
        console.log("aconteceu um erro", error.message)
        
      }
    }) 
  }

}
