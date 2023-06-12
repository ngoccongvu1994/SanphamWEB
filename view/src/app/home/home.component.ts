import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryProdService } from '../_services/category-prod.service';
import { ProductService } from '../_services/product.service';
import { NewsService } from '../_services/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private svCategory: CategoryProdService,
    public svNews : NewsService,
  ) {

  }
   public Prod: any;
   public lstNews: any;
   public lstCategory : any;
  ngOnInit(): void {
  this.loadCategory();
  this.loadNews();
  }
  async loadNews(){
    await this.svNews.getAll().subscribe({
      next: data => {
        this.lstNews = data;
      }
    });
  }
    async loadCategory(){
    await this.svCategory.getAll().subscribe({
      next: data => {
        this.lstCategory = data;
      console.log(data);
      }
    });
  }
}
