import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<Product>;

  products: Product[];
  displayedColumns = ['id', 'name','price','action'];

  constructor(private productService: ProductService) { 

  }

  ngOnInit(): void {
    this.productService.read().subscribe( products =>{
      this.products = products
    })
  }

}
