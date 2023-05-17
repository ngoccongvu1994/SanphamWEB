import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../_model/product/product.model';
import { ProductService } from '../_services/product.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryProdService } from '../_services/category-prod.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(
    private svProduct: ProductService,
    private toast : ToastrService,
    private svCategory: CategoryProdService
  ){
    this.Product = {};
  }
  public FileImage: any;
  public urlImage =  '';
  public lstProduct = [];
  public Product: any;
  public lstCategory : any;
  ngOnInit(): void {
    this.loadCategory();
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
 async createProduct(){
  if (!this.FileImage || !this.Product.name) {
    this.toast.warning('yêu cầu chọn ảnh sản phẩm và nhập tên');
    return;
  }
   this.Product = await this.svProduct.post(this.Product, this.FileImage ).subscribe({
    next: data => {
       this.toast.success('create success full');
       console.log(data);
    }
   });
  }
  onFileChange(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.FileImage = files[0];
      this.urlImage = URL.createObjectURL(this.FileImage);
    }
  }

  //   GetList(){
  //   this.svProduct.get(this.Product)
  // }
}
