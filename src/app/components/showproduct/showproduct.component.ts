import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductTypeService } from 'src/app/services/product-type.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit{
  List_products: any;

  searchText: string = '';

  productTypes!: any
  ptstring!: any;

  constructor (
    
    private productsService:ProductsService,
    private productTypeService: ProductTypeService,
    )
    {
      this.getAllProducts();
      this.getAllProductTypes();
    }
  ngOnInit(): void {
    
  }

  onSearchTextEntered(seachValue: string) {
    this.searchText = seachValue;
    console.log(this.searchText);
  }

  SeachMatch(item: any): Boolean {
    if (this.searchText === '' || 
      item.Product_Name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.Product_Type.toLowerCase().includes(this.searchText.toLowerCase())) {
        return true
    } else return false;
  }

  ShowSeach(productType: string): Boolean {
    if ( this.List_products.find((x: { Product_Type: string; })  => x.Product_Type == productType && this.SeachMatch(x)) ) {
      return true;
    } else return false;
  }

  isCheck(bool: boolean): string {
    if(bool) {
      return "&#x2713;"
    } else return "&#x2715;"
  }

  // rest from service
  getAllProducts() {
    try{
      this.productsService.restAllProducts().subscribe(
        data => {
          this.List_products = data
        },
        err => {
          console.log(err);
        }
      );
    } catch(err) {
      console.log(err);
    }
  }

  getAllProductTypes() {
    try{
      this.productTypeService.restAllProductTypes().subscribe(
        data => {
          this.productTypes = data;
          return data;
        },
        err => {
          console.log(err);
        }
      );
    } catch(err) {
      console.log(err);
    }
  }
}
