import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './page/index/index.component';
import { IndexFiveComponent } from './page/index-five/index-five.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { BasketComponent } from './components/basket/basket.component';

export const routes: Routes = [
    {'path' : '', component:IndexFiveComponent},
    {'path' : 'index-zero', component:IndexComponent},
    {'path' : 'index-five', component:IndexFiveComponent},
    {'path' : 'more-info/:drone', component:MoreInfoComponent},
    {'path' : 'basket', component:BasketComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }