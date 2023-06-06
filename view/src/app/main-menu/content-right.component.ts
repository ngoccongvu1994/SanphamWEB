import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryProdService } from '../_services/category-prod.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-content-right',
  templateUrl: './content-right.component.html',
  styleUrls: ['./content-right.component.css']
})
export class ContentRightComponent {
  constructor (
    private toast : ToastrService,
    private svCategory: CategoryProdService,
 ) {
 }
   public Prod: any;
   public lstCategory : any;
   public codeProd = '';
 ngOnInit(){
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
}
