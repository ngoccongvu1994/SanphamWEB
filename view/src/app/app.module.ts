import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HeaderComponent } from './header/header.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { LstProductComponent } from './lst-product/lst-product.component';
import { ContactComponent } from './contact/contact.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { CategoryProdComponent } from './category-prod/category-prod.component';
import { filterLevelPipe } from './pipe/filter-level.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContentRightComponent } from './main-menu/content-right.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ProductComponent,
    NewsComponent,
    FooterComponent,
    MainMenuComponent,
    HeaderComponent,
    IntroduceComponent,
    LstProductComponent,
    ContactComponent,
    DetailProdComponent,
    CategoryProdComponent,
    filterLevelPipe,
    ContentRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
