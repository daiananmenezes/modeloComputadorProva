import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/listar/listar.component';

const routes: Routes = [

  {
    //listar 
    path : '',
    component: ListarComponent
},
{
   //cadastrar
    path : 'computador/cadastrar',
    component: CadastrarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
