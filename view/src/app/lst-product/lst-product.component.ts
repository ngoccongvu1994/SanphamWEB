import { Component } from '@angular/core';
import { ProductModel } from '../_model/product/product.model';
import { ProductService } from '../_services/product.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-lst-product',
  templateUrl: './lst-product.component.html',
  styleUrls: ['./lst-product.component.css']
})
export class LstProductComponent {
 constructor (
    private svProduct: ProductService,
    private toast : ToastrService
 ) {
 }
   public lstProduct = [];
 ngOnInit(){
  this.loadProd();
 }
 async loadProd() {
     const d = await this.svProduct.getAll({
    name: ''
  }).subscribe({
    next: data => {
       this.toast.success('create success full');
       console.log(data);
    }
   });
 }
}
