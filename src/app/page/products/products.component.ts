
import { ProductService } from 'src/app/service/product.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(
    private productService: ProductService
  ) { }

  product$: Observable<Product[]> = this.productService.getAll()
}
