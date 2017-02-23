/**
 * Created by hjs on 23/02/2017.
 */

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { IProduct } from "./product";
import {ProductService} from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ["product-list.component.css"]
})
export class ProductDetailComponent
{
    pageTitle: string = "Product Detail";
    product: IProduct;
    errorMessage: any;

    constructor( private _router: Router,
                 private _route: ActivatedRoute,
                 private _productService: ProductService)
    { }

     ngOnInit(): void
     {
         let id:number = +this._route.snapshot.params['id'];
         this.pageTitle += `: ${id}`;

         this._productService.getProduct(id).subscribe(
             p => { this.product = p; this.pageTitle = "Product Detail: " + p.productName; }
             error => this.errorMessage = <any>error
         )
     }

     onBack(): void
     {
         this._router.navigate(['/products']);
     }

}