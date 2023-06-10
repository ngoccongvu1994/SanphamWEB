import { Component } from '@angular/core';
import { NewsService } from '../_services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  constructor (
    public svNews : NewsService,
 ) {
 }
  public lstNews : any;
 ngOnInit(){
  this.loadNews();
 }
  async loadNews(){
    await this.svNews.getAll().subscribe({
      next: data => {
        this.lstNews = data;
      }
    });
  }
}
