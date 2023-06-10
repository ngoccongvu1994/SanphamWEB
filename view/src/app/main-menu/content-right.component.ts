import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryProdService } from '../_services/category-prod.service';
import { ProductService } from '../_services/product.service';
import { NewsService } from '../_services/news.service';
@Component({
  selector: 'app-content-right',
  templateUrl: './content-right.component.html',
  styleUrls: ['./content-right.component.css']
})
export class ContentRightComponent {
  @Input('lstNews') lstNews: any;
  constructor (
    private toast : ToastrService,
    private svCategory: CategoryProdService,
    public svNews : NewsService,
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
