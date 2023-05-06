import { Component, OnInit } from '@angular/core';
import { CategoryProductModel } from '../_model/product/category_product.model';
import { CategoryProdService } from '../_services/category-prod.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit{
  public lstMenu: CategoryProductModel[];
  constructor(
    private svCategory :CategoryProdService
  ){
    this.lstMenu = []
  }
  ngOnInit(): void {
    this.loadMenu();
  }
async  loadMenu(){
     await this.svCategory.getAll().subscribe({
    next: data => {
      this.lstMenu = data;
    }
  });
  }
}
