import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryProdService } from '../_services/category-prod.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent {
  constructor (
    private svProduct: ProductService,
    private toast : ToastrService,
    private svCategory: CategoryProdService,
    private route: ActivatedRoute,
 ) {
 }
   public Prod: any;
   public lstCategory : any;
   public codeProd = '';
 ngOnInit(){
  this.route.params.subscribe(params => {
    this.codeProd = this.route.snapshot.params['id'];
    console.log(this.codeProd);
    this.loadProd();
  });
 }
 async loadProd() {
   await this.svProduct.get(this.codeProd).subscribe({
    next: res => {
      this.Prod = res;
    }
   });
 }
}
