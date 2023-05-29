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
 public lstInfo : any;
 public Info : InfoModel;
  ngOnInit(): void {
    this.loadInfo();
  }
 async loadInfo(){
    this.lstInfo  = await this.svInfo.getAll();
  }
  async creatInfo(){
    await this.svInfo.post(this.Info).subscribe({
      next: data => {
         this.toast.success('Khởi tạo thành công');
         this.loadInfo();
      }
     });
  }
}
