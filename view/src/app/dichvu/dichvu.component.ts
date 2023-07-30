import { Component, OnInit } from '@angular/core';
import { DichVuModel } from '../_model/dichvu.model';
import { DichVuService } from '../_services/dichvu.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls: ['./dichvu.component.css']
})
export class DichVuComponent {
    constructor(
    private svDichVu: DichVuService,
    private toast : ToastrService,
  ){
    this.DichVu = {
      _id: '',
      name: '',
      code: '',
      description:'',
      level: 1,
      parent_id: '',
    }
   }
  public lstCategory : any;
  public DichVu: DichVuModel;
  IsEdit = false;
  ngOnInit(): void {
    this.loadCategory()
  }
 async createProduct(){
    await this.svDichVu.post(this.DichVu).subscribe({
    next: data => {
       this.toast.success('create success full');
       console.log(data);
       this.loadCategory();
    }
   });
  }
  async loadCategory(){
    await this.svDichVu.getAll().subscribe({
      next: data => {
        this.lstCategory = data;
        this.toast.success('load category success full');
       console.log(data);
      }
    });
  }
  deleteByCode(code:string){
    this.svDichVu.deleteByCode(code).subscribe({
      next: data => {
        this.toast.success('load category success full');
        this.loadCategory();
      }
    })
  }
async updateCate(){
    await this.svDichVu.update(this.DichVu).subscribe({
      next: data => {
         this.toast.success('update success full');
         this.IsEdit = false;
        //  this.Category = {};
      }
     });
  }
  editItem (item:any){
    this.DichVu = item
    this.IsEdit = true;
  }
}
