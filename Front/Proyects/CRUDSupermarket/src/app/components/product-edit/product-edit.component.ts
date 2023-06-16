import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  product: Product = null;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private toastr: ToastrService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getProductById(id).subscribe(data =>{
      this.toastr.success("cargado", "Fail");
      this.product = data;
    },
    error => {
      this.toastr.error(error.message, "Fail");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.route.snapshot.params['id'];
    this.service.update(id, this.product).subscribe(data =>{
      this.toastr.success("Producto Actualizado", "Completed");
      this.router.navigate(['']);
  },error => {
    this.toastr.error(error.message, "Fail");
    this.router.navigate(['']);
  })
  }


}
