import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../_model/product/product.model';
import { ProductService } from '../_services/product.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private svProduct: ProductService,
    private toast : ToastrService
  ){
    this.Product = {}
  }
  public lstProduct = [];
  public Product: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 async createProduct(){
   this.Product = await this.svProduct.post(this.Product).subscribe({
    next: data => {
       this.toast.success('create success full');
       console.log(data);
    }
   });
  }
  //   GetList(){
  //   this.svProduct.get(this.Product)
  // }
}
