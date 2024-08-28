import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { UserCardComponent } from './user-card/user-card.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductCardComponent,
    },
    {
        path: 'random-user',
        component: UserCardComponent,
    }
];
