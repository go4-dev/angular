import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MyGuardGuard } from './core/guards/my-guard.guard';
import { HomeComponent } from './home/home.component';

class RouteNames {
  public static HOME_PAGE = "home";
  public static ADMIN_PAGE = "admin";
}

const routes: Routes = [
  { path: RouteNames.HOME_PAGE, component: HomeComponent },
  { path: RouteNames.ADMIN_PAGE, component: AdminComponent, canActivate: [MyGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }