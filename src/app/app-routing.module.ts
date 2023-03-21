import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnauthorizedErrorComponent } from './error-page/unauthorized-error/unauthorized-error.component';
import { UnknownErrorComponent } from './error-page/unknown-error/unknown-error.component';
import { MyoffersComponent } from './myoffers/myoffers.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'my-applications', component: ApplicationsComponent },
  { path: 'myoffers', component: MyoffersComponent},
  { path: 'unknown-error', component: UnknownErrorComponent},
  {path: 'unauthorized-error', component: UnauthorizedErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
