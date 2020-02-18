import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'references',
    loadChildren: () => import('./references/references.module').then( m => m.ReferencesPageModule)
  },
  {
    path: 'brincadeira',
    loadChildren: () => import('./brincadeira/brincadeira.module').then( m => m.BrincadeiraPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
