import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleInfoComponent } from './article-info/article-info.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleInfoComponent        
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
