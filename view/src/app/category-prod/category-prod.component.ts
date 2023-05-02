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
    private toast : ToastrService,
  ){
    this.Category = {}
  }
  public lstCategory : any;
  public Category: any;
  IsEdit = false;
  ngOnInit(): void {
    this.loadCategory()
  }
 async createProduct(){
    await this.svCategory.post(this.Category).subscribe({
    next: data => {
       this.toast.success('create success full');
       console.log(data);
       this.loadCategory();
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
  deleteByCode(code:string){
    this.svCategory.deleteByCode(code).subscribe({
      next: data => {
        this.toast.success('load category success full');
        this.loadCategory();
      }
    })
  }
async updateCate(){
    await this.svCategory.update(this.Category).subscribe({
      next: data => {
         this.toast.success('update success full');
         this.IsEdit = false;
      }
     });
  }
  editItem (item:any){
    this.Category = item
    this.IsEdit = true;
  }
}
