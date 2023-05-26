import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProductComponent } from './product/product.component';
import {NewsComponent} from './news/news.component'
import {IntroduceComponent} from './introduce/introduce.component'
import {LstProductComponent} from './lst-product/lst-product.component'
import {ContactComponent} from './contact/contact.component'
import {CategoryProdComponent} from './category-prod/category-prod.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gioithieu', component: IntroduceComponent },
  { path: 'sanpham/:code', component: LstProductComponent},
  { path: 'tintuc', component: NewsComponent },
  { path: 'lienhe', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent ,children: [
    {
      path:'user',
      component: BoardUserComponent,
      data:{
        breadcrumb:'Thông tin tài khoản ',
        link:'admin/user'
      }
    },
    {
      path:'product',
      component: ProductComponent,
      data:{
        breadcrumb:'Thông tin tài khoản ',
        link:'admin/product'
      }
    },{
      path:'cateProduct',
      component: CategoryProdComponent,
      data:{
        breadcrumb:'Thông tin tài khoản ',
        link:'admin/cateProduct'
      }
    },
    // {
    //   path:'news',
    //   component: NewsComponent,
    //   data:{
    //     breadcrumb:'Thông tin tài khoản ',
    //     link:'admin/news'
    //   }
    // }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
