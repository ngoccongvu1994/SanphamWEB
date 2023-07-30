import { Component, OnInit } from '@angular/core';
import { DichVuModel } from '../_model/dichvu.model';
import { CategoryProductModel } from '../_model/product/category_product.model';
import { CategoryProdService } from '../_services/category-prod.service';
import { DichVuService } from '../_services/dichvu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit{
  public lstMenu: CategoryProductModel[];
  public lstDichVu: DichVuModel[];
  constructor(
    private svCategory :CategoryProdService,
    private svDichVu :DichVuService
  ){
    this.lstMenu = []
    this.lstDichVu = []
  }
  ngOnInit(): void {
    this.loadMenu();
    this.loadDichVu();
  }
async  loadMenu(){
     await this.svCategory.getAll().subscribe({
    next: data => {
      this.lstMenu = data;
    }
  });
  }
  async  loadDichVu(){
    await this.svDichVu.getAll().subscribe({
   next: data => {
     this.lstDichVu = data;
   }
 });
 }
}
