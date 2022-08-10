import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'enquiries',
    loadChildren: () => import('./pages/enquiries/enquiries.module').then( m => m.EnquiriesPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'swinburne-sarawak',
    loadChildren: () => import('./pages/swinburne-sarawak/swinburne-sarawak.module').then( m => m.SwinburneSarawakPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/splite-pane/splite-pane.module').then( m => m.SplitePanePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./pages/course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'accomodation',
    loadChildren: () => import('./pages/accomodation/accomodation.module').then( m => m.AccomodationPageModule)
  },
  {
    path: 'compare',
    loadChildren: () => import('./pages/compare/compare.module').then( m => m.ComparePageModule)
  },
  {
    path: 'course-detail',
    loadChildren: () => import('./pages/course-detail/course-detail.module').then( m => m.CourseDetailPageModule)
  },
  {
    path: 'accomodation-detail',
    loadChildren: () => import('./pages/accomodation-detail/accomodation-detail.module').then( m => m.AccomodationDetailPageModule)
  },
  {
    path: 'university',
    loadChildren: () => import('./pages/university/university.module').then( m => m.UniversityPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
