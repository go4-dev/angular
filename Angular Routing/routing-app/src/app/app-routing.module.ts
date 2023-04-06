import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

class RouteNames {
  public static HOME_PAGE = "";
  public static CONTACT_PAGE = "contact";
  public static ABOUT_PAGE = "about"
}

const routes: Routes = [
  { path: RouteNames.HOME_PAGE, component: HomeComponent },
  { path: RouteNames.CONTACT_PAGE, component: ContactComponent },
  { path: RouteNames.ABOUT_PAGE, component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
