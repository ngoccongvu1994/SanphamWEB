import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InfoService } from '../_services/info.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   public lstInfo : any;
  constructor(
    public svInfo : InfoService,
    private toast : ToastrService,
  ) {
   }
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
}
