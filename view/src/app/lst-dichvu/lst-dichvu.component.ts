import { Component } from '@angular/core';
import { ProductModel } from '../_model/product/product.model';
import { ProductService } from '../_services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DichVuService } from '../_services/dichvu.service';
@Component({
  selector: 'app-lst-dichvu',
  templateUrl: './lst-dichvu.component.html',
  styleUrls: ['./lst-dichvu.component.css']
})
export class LstDichVuComponent {
 constructor (
    private svProduct: ProductService,
    private toast : ToastrService,
    private svCategory: DichVuService,
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
