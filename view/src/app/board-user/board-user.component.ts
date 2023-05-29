import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InfoModel } from '../_model/infoContact.model';
import { InfoService } from '../_services/info.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;

  constructor(
    public svInfo : InfoService,
    private toast : ToastrService,
  ) {
    this.Info = {
      name: '',
      _id : '',
      name_tag: '',
      value: '',
      active: true
    }
   }
 public IsEdit = false;
 public lstInfo : any;
 public Info : any;
  ngOnInit(): void {
    this.loadInfo();
  }
 async loadInfo(){
    await this.svInfo.getAll().subscribe({
      next: data => {
        this.lstInfo = data;
      }
    });
  }
  addNew(){
    this.lstInfo.push({IsEdit:true})
  }
  async creatOrUpdateInfo(item: any){
    this.Info = item;
    if(item._id){
      await this.svInfo.update(this.Info).subscribe({
      next: data => {
         this.toast.success('update success full');
         this.Info.IsEdit = false;
      }
     });
    } else {
      await this.svInfo.post(this.Info).subscribe({
      next: data => {
         this.toast.success('Khởi tạo thành công');
         this.loadInfo();
      }
     });
    }
  }
  delete(id:string){
    this.svInfo.delete(id).subscribe({
      next: data => {
        this.loadInfo();
      }
    })
  }
  editItem (item:any){
    item.IsEdit = true;
    this.Info = item
  }
}
