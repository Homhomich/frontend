import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountPageComponent} from './pages/account-page/account-page.component';
import {BasketPageComponent} from './pages/basket-page/basket-page.component';
import {BasketPageGuard} from './guards/basket-page.guard';
import {EditAccountPageComponent} from '../../features/account/components/edit-account-page/edit-account-page.component';
import {AccountPageGuard} from './guards/account-page.guard';
import {UserOrdersPageComponent} from "./pages/user-orders-page/user-orders-page.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AccountPageComponent,
      },
      {
        path: 'basket',
        canActivate: [BasketPageGuard],
        runGuardsAndResolvers: 'always',
        component: BasketPageComponent
      },
      {
        path: 'orders',
        component: UserOrdersPageComponent
      },
      {
        path: 'edit/account',
        component: EditAccountPageComponent
      }
    ],
    canActivate: [AccountPageGuard],
    runGuardsAndResolvers: 'always',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPagesRoutingModule {
}
