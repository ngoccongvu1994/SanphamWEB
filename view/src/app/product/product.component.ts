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
  public lstProduct: any;
  public Product: any;
  public lstCategory  = [{
    name: 'Phân loại ',
    _id: null,
    level: 2
  }];
  public isCreateProd = false;
  public isEditProd = false;
  public strSearch = '';
  public strCategory = '';
  public pageSize = 5;
  public pageIndex = 1;
  public totalItems = 0;
  ngOnInit(): void {
    this.loadCategory();
    this.GetList();
  }
  async loadCategory(){
    await this.svCategory.getAll().subscribe({
      next: data => {
        this.lstCategory = [...[
          {name: 'Phân loại ',
          _id: null,
          level: 2}],
          ...data];

       console.log(data);
      }
    });
  }
  isCreate(boo: boolean){
     this.isCreateProd = boo;
     this.isEditProd = boo;
  }
 async createProduct(){
  if (!this.FileImage || !this.Product.name) {
    this.toast.warning('yêu cầu chọn ảnh sản phẩm và nhập tên');
    return;
  }
   this.Product = await this.svProduct.post(this.Product, this.FileImage ).subscribe({
    next: data => {
       this.toast.success('Thành công');
       this.isCreateProd = false;
       this.isEditProd = false;
       this.GetList();
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

  async  GetList(){
      await this.svProduct.getAll({
        name: this.strSearch,
        category_id: this.strCategory,
        pageSize: this.pageSize,
        pageIndex: this.pageIndex
      }).subscribe({
        next: res => {
          this.lstProduct = res.tutorials;
          this.totalItems = res.totalItem;
         console.log(res);
        }
      });
  }
 async deleteProd(item: ProductModel){
      this.svProduct.deleteByCode(item._id).subscribe({
      next: data => {
        this.toast.success('Thành công');
        this.GetList();
      }
    })
  }
 async editProd(item:ProductModel){
    await this.svProduct.update(item).subscribe({
      next: data => {
         this.toast.success('update success full');
         this.isEditProd = false;
      }
     });
  }
  editItem (item:ProductModel){
    this.Product = item
    this.isEditProd = true;
  }
}
