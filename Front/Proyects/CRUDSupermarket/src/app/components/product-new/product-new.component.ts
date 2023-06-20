import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent {

  name:string ="";
  price:number=0;
  type:number=0;
  constructor(private service: ProductService, 
    private router: Router,
    private toastr: ToastrService){}

  onCreateProduct(){
    const product = new Product(this.name, this.price, this.type);
    
    this.service.create(product).subscribe((data)=>{
      this.toastr.success('producto creado', 'Ok',{
        timeOut:3000
      })      
      console.log("Producto creado");
      this.router.navigate(['']);
    },error =>{
      this.toastr.error(error.error.message , "Fail")
      console.log(error);
      this.router.navigate(['']);
    }
    );
  }
}
