import { Component, OnInit } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  products: Product[]=[
    {id:1,name:"laptop", price:2500,categoryId:1, description:"Casper Excalibur",imageUrl:"https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"},
    {id:2,name:"Mause", price:500,categoryId:2, description:"Casper",imageUrl:"https://i1.wp.com/getwallpapers.com/wallpaper/full/6/5/8/1105826-free-download-logitech-wallpapers-1920x1080.jpg"},
    {id:1,name:"Kulaklık", price:2500,categoryId:1, description:"Casper Excalibur",imageUrl:"https://images.unsplash.com/photo-1481207801830-97f0f9a1337e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},
    {id:2,name:"Klavye", price:500,categoryId:2, description:"Casper",imageUrl:"https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80"},
    {id:1,name:"Hoparlör", price:2500,categoryId:1, description:"Casper Excalibur",imageUrl:"https://images.unsplash.com/photo-1595432541891-a461100d3054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},
    {id:2,name:"Kasa", price:500,categoryId:2, description:"Casper",imageUrl:"https://images.unsplash.com/photo-1618339220157-daa2cd9ade56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
  ]


  ngOnInit(): void {
  }

}
