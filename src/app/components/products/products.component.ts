import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ProductModel } from 'src/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: ProductModel[];
  displayedColumns: string[] = ['id', 'num'];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService
      .getProducts()
      .pipe(tap((it) => (this.products = it)))
      .subscribe();
  }
}
