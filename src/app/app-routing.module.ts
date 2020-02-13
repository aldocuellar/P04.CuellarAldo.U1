import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'investigacion',
    loadChildren: () => import('./investigacion/investigacion.module').then( m => m.InvestigacionPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
