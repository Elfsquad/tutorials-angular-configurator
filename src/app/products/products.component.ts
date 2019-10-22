import { Component, OnInit } from '@angular/core';

declare var Elfskot;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor() { }

  ngOnInit() {
    Elfskot.configurator.getConfigurationModels('en', (productOverview) => {
      this.products = productOverview.features;
    });
  }
}