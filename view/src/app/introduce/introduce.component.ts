import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { IntroduceModel } from '../_model/introduce.model';
import { IntroduceService } from '../_services/introduce.service';
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit{
    constructor(
    public svIntro : IntroduceService,
    private toast : ToastrService,
  ) {}
  public lstIntro : any;
  public Intro : any;
  ngOnInit(){
    this.loadIntro();
  }
  async loadIntro(){
    await this.svIntro.getAll().subscribe({
      next: data => {
        this.lstIntro = data;
      }
    });
  }
}
