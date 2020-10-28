import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryhome',
  templateUrl: './categoryhome.page.html',
  styleUrls: ['./categoryhome.page.scss'],
})
export class CategoryhomePage implements OnInit {
  categories = [
    {
      name: 'Restaurant',
      icon: 'fas fa-utensils'
    },
    {
      name: 'Super Mercado',
      icon: 'fas fa-shopping-cart'
    },
    {
      name: 'Colmado',
      icon: 'fas fa-store'
    },
    {
      name: 'Tienda',
      icon: 'fas fa-shopping-bag'
    },
    {
      name: 'Liquor Store',
      icon: 'fas fa-glass-cheers'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick(event) {
    const category = event.target.innerText.trim();
    this.router.navigate(['tabs/tab1'], { queryParams: { category } });
  }
}
