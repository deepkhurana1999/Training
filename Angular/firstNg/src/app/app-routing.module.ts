import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TShirtDataBindingComponent } from './t-shirt-data-binding/t-shirt-data-binding.component';
import { UnrelatedHostComponent } from './unrelated-host/unrelated-host.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, },
    { path: 'data-binding', component: TShirtDataBindingComponent, },
    { path: 'product', component: ProductsComponent, },
    { path: 'master-detail', component: PurchaseComponent, },
    { path: 'data-sharing', component: UnrelatedHostComponent, },
    { path: 'attribute-directive', component: AttributeDemoComponent, },
    { path: 'global-errorhandler', component: GlobalErrorComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
