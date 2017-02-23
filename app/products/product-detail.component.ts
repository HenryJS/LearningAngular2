/**
 * Created by hjs on 23/02/2017.
 */

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { IProduct } from "./product";

@Component({
    templateUrl: 'product-detail.component.html',
    moduleId: module.id
})
export class ProductDetailComponent
{
    pageTitle: string = "Product Detail";
    product: IProduct;
    //productId: int;

    constructor( private _router: Router,
                 private _route: ActivatedRoute)
    { }

     ngOnInit(): void
     {
         let id = +this._route.snapshot.params['id'];
         this.pageTitle += `: ${id}`;
     }

     onBack(): void
     {
         this._router.navigate(['/products']);
     }

}