import { Component } from '@angular/core';
import { ProductModel } from '../_model/product/product.model';
import { ProductService } from '../_services/product.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryProdService } from '../_services/category-prod.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
    private route: ActivatedRoute,
 ) {
 }
   subscription: Subscription;
   public lstProduct :any;
   public totalItems: any;
   public pageIndex = 1;
   public lstCategory : any;
   public codeProd = '';
async ngOnInit(){
  this.subscription = this.route.params.subscribe(params => {
    this.codeProd = this.route.snapshot.params['code'];
    this.loadProd(this.codeProd);
  });
 }
 ngOnDestroy() {
  this.subscription.unsubscribe();
}
 async loadProd(codeProd: string) {
    await this.svProduct.getAll({
      name: '',
      code: codeProd,
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
 changePage(event: any) {
  this.pageIndex = event;
  this.loadProd(this.codeProd)
 }

}
