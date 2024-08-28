import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    ProductCardComponent, 
    UserCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
