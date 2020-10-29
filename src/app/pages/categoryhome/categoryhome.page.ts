import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryhome',
  templateUrl: './categoryhome.page.html',
  styleUrls: ['./categoryhome.page.scss'],
})
export class CategoryhomePage {
  categories = [
    {
      name: 'Comida',
      icon: 'fas fa-utensils'
    },
    {
      name: 'Bebidas',
      icon: 'fas fa-shopping-cart'
    },
    {
      name: 'Salud',
      icon: 'fas fa-store'
    },
    {
      name: 'Super',
      icon: 'fas fa-shopping-bag'
    },
    {
      name: 'Regalos',
      icon: 'fas fa-glass-cheers'
    },
    {
      name: 'Servicios',
      icon: 'fas'
    },
    {
      name: 'Tiendas',
      icon: 'fas'
    }
  ];

  constructor(
    private router: Router
  ) { }

  onClick(event) {
    const category = event.target.innerText.trim();
    this.router.navigate(['tabs/tab1'], { queryParams: { category } });
  }
}
