import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes , {
    useHash: false,
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 0],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
