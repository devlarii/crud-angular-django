import { AppComponent } from './../app.component';
import { NullTemplateVisitor } from '@angular/compiler';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
})
export class ProductsDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router, private appComponent: AppComponent) {}
  selected_product = { id: 0, name: '', description: '', price: '' };
  selected_id: number | undefined;

  ngOnInit(): void {
    +this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id')!);
      this.selected_id = id;
      this.loadProduct(id);
    });
  }

  loadProduct(id: number) {
    this.api.getPorduct(id).subscribe({
      next: (data) => {
        this.selected_product = data;
      },
      error: (error) => {
        console.log('aconteceu um erro', error.message);
      },
    });

  };
  update() {
    this.api.updateProduct(this.selected_product).subscribe({
      next: (data) => {
        this.selected_product = data;
      },
      error: (error) => {
        console.log('aconteceu um erro', error.message);
      },
    })
  };
  delete() {
    this.api.deleteProduct(this.selected_id).subscribe({
      next: (data) => {
        let index: any;
        this.appComponent.products.forEach((e, i) =>{
          if(e.id == this.selected_id)
            index = i;
        });

        this.appComponent.products.splice(index, 1);
      },
      error: (error) => {
        console.log('aconteceu um erro', error.message);
      },
    })
  };

  newProduct(){
    this.router.navigate(['new-product'])
  }
}
