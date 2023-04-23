import { Component, OnInit } from '@angular/core';
import { CategoryProductModel } from '../_model/product/category_product.model';
import { CategoryProdService } from '../_services/category-prod.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-category-prod',
  templateUrl: './category-prod.component.html',
  styleUrls: ['./category-prod.component.css']
})
export class CategoryProdComponent {
    constructor(
    private svCategory: CategoryProdService,
    private toast : ToastrService
  ){
    this.Category = {}
  }
  public lstProduct = [];
  public Category: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 async createProduct(){
   this.Category = await this.svCategory.post(this.Category).subscribe({
    next: data => {
       this.toast.success('create success full');
       console.log(data);
    }
   });
  }
}
