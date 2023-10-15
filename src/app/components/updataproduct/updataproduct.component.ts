import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-updataproduct',
  templateUrl: './updataproduct.component.html',
  styleUrls: ['./updataproduct.component.css']
})
export class UpdataproductComponent {

  product: any;

  constructor
  (
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) 
  
  {
    this.getOneProduct();
  }

  ngOnInit(): void {
  }

  getOneProduct() {
    try{
      let product_id = this.activatedRoute.snapshot.paramMap.get('id');
      this.productService.restOneProduct(product_id).subscribe(
        data => {
          this.product = data;
        },
        err => {
          console.log(err);
        }
      )
    } catch(err) {
      console.log(err);
    }
  }
}
