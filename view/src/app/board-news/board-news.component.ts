import { Component, OnInit } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from '../_services/news.service';

@Component({
  selector: 'app-board-news',
  templateUrl: './board-news.component.html',
  styleUrls: ['./board-news.component.css']
})
export class BoardNewsComponent implements OnInit {

  content?: string;
  public editor: Editor;
  public toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  html: '';
  constructor(
    public svNews : NewsService,
    private toast : ToastrService,
  ) {
      this.News = {
      title: '',
      _id : '',
      content: '',
      active: true
    }
  }
  public IsEdit = false;
  public lstNews : any;
  public News : any;
  ngOnInit(): void {
    this.editor = new Editor();
    this.loadNews();
  }
    ngOnDestroy(): void {
    this.editor.destroy();
  }
  async loadNews(){
    await this.svNews.getAll().subscribe({
      next: data => {
        this.lstNews = data;
      }
    });
  }
  addNew(){
    this.IsEdit = true;
    this.News = {
      title: '',
      _id : '',
      content: '',
      active: true
    }
  }
  async creatOrUpdateInfo(item: any){
    this.News = item;
    if(item._id){
      await this.svNews.update(this.News).subscribe({
      next: data => {
         this.toast.success('cập nhật thành công ');
         this.IsEdit = false;
      }
     });
    } else {
      await this.svNews.post(this.News).subscribe({
      next: data => {
         this.toast.success('Khởi tạo thành công');
         this.loadNews();
      }
     });
    }
  }
  delete(id:string){
    this.svNews.delete(id).subscribe({
      next: data => {
        this.loadNews();
      }
    })
  }
  editItem (item:any){
    this.IsEdit = true;
    this.News = item
  }
}
