import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { IntroduceModel } from '../_model/introduce.model';
import { IntroduceService } from '../_services/introduce.service';
@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content?: string;
  public editor: Editor;
  html: '';
  constructor(
    public svIntro : IntroduceService,
    private toast : ToastrService,
  ) {
      this.Intro = {
      title: '',
      _id : '',
      content: '',
      active: true
    }
  }
  public IsEdit = false;
  public lstIntro : any;
  public Intro : any;
  ngOnInit(): void {
    this.editor = new Editor();
    this.loadIntro();
  }
    ngOnDestroy(): void {
    this.editor.destroy();
  }
  async loadIntro(){
    await this.svIntro.getAll().subscribe({
      next: data => {
        this.lstIntro = data;
      }
    });
  }
  addNew(){
    this.IsEdit = true;
    this.Intro = {
      title: '',
      _id : '',
      content: '',
      active: true
    }
  }
  async creatOrUpdateInfo(item: any){
    this.Intro = item;
    if(item._id){
      await this.svIntro.update(this.Intro).subscribe({
      next: data => {
         this.toast.success('cập nhật thành công ');
         this.IsEdit = false;
      }
     });
    } else {
      await this.svIntro.post(this.Intro).subscribe({
      next: data => {
         this.toast.success('Khởi tạo thành công');
         this.loadIntro();
      }
     });
    }
  }
  delete(id:string){
    this.svIntro.delete(id).subscribe({
      next: data => {
        this.loadIntro();
      }
    })
  }
  editItem (item:any){
    this.IsEdit = true;
    this.Intro = item
  }
}
