import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cover',
    pathMatch: 'full'
  },
  {
    path: 'cover',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'table of contents', loadChildren: './toc/toc.module#TocPageModule' },
  { path: 'chapter 1', loadChildren: './chapter1/chapter1.module#Chapter1PageModule' },
  { path: 'chapter 2', loadChildren: './chapter2/chapter2.module#Chapter2PageModule' },
  { path: 'chapter 3', loadChildren: './chapter3/chapter3.module#Chapter3PageModule' },
  { path: 'chapter 4', loadChildren: './chapter4/chapter4.module#Chapter4PageModule' },
  { path: 'chapter 5', loadChildren: './chapter5/chapter5.module#Chapter5PageModule' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}