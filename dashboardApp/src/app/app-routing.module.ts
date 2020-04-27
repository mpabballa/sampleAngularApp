import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryListComponent } from './components/gallery/gallery-list/gallery-list.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'about', pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './components/gallery/gallery.module#GalleryModule'
  }, 
  {
    path: 'gallery',
    loadChildren: './components/gallery/gallery.module#GalleryModule'
  },
  {
    path: 'about',
    loadChildren: './components/about/about.module#AboutModule'
  }, 
  {
    path: 'article',
    loadChildren: './components/article/article.module#ArticleModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
