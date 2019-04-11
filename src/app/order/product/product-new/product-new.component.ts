import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PRODUCT_API_URL, SERVER_URL} from '../../../app.constants';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl({value:'',disabled:true}, Validators.minLength(2)),
    name: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private productService:ProductService, private router:Router) {}

  ngOnInit() {
  }


  createProduct()
  {
    const product=new Product();
    product.id=this.productForm.get('id').value;
    product.name=this.productForm.get('name').value;
    product.description=this.productForm.get('description').value;
    product.createdBy='Pavan';
    product.createdDate='';
    product.lastModifiedBy='Pavan';
    product.lastModifiedDate='Pavan';


    const url=SERVER_URL+PRODUCT_API_URL+'create';

    this.productService.createProduct(url,product).subscribe(
      value =>
      {
        console.log('Successfully created product');
      },error1 =>
      {
        console.log('Failed to create product');
      },
      ()=>{
        this.router.navigate(['/product/list']);
      });
  }
}
