import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../_services/news.service';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent {
constructor (
    private svnews: NewsService,
    private route: ActivatedRoute,
 ) {
 }
   public News: any;
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
   await this.svnews.get(this.codeProd).subscribe({
    next: res => {
      this.News = res;
    }
   });
 }
}
