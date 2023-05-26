import { Component } from '@angular/core';
import { ProductModel } from '../_model/product/product.model';
import { ProductService } from '../_services/product.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryProdService } from '../_services/category-prod.service';
@Component({
  selector: 'app-lst-product',
  templateUrl: './lst-product.component.html',
  styleUrls: ['./lst-product.component.css']
})
export class LstProductComponent {
 constructor (
    private svProduct: ProductService,
    private toast : ToastrService,
    private svCategory: CategoryProdService,
 ) {
 }
   public lstProduct :any;
   public totalItems: any;
   public pageIndex = 1;
   public lstCategory : any;
 ngOnInit(){
  this.loadProd();
  this.loadCategory();
 }
 async loadProd() {
    await this.svProduct.getAll({
      name: '',
      category_id: '',
      pageSize: 20,
      pageIndex: this.pageIndex
  }).subscribe({
    next: res => {
      this.lstProduct = res.tutorials;
      this.totalItems = res.totalItem;
    }
   });
 }
 async loadCategory(){
  await this.svCategory.getAll().subscribe({
    next: data => {
      this.lstCategory = data;
      this.toast.success('load category success full');
     console.log(data);
    }
  });
}
}
