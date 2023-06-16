import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService,
              private toastr:ToastrService) {}

  ngOnInit(): void {
    this.loadProucts();
  }

  loadProucts(): void {
   this.service.getProducts().subscribe(data => {
     this.products = data;
   }, error => console.log(error));
  }

  deleteProduct(id:number){
    this.service.delete(id).subscribe(() => {
      this.toastr.success("Product deleted","Deleted");
      this.loadProucts()},
      error => {
        this.toastr.error(error,"Error");
        this.loadProucts()
      })
  }
}