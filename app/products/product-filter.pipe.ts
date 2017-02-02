/**
 * Created by hjs on 02/02/2017.
 */

import { Pipe, PipeTransform} from '@angular/core';
import {IProduct} from "./product";

@Pipe({
    name: "productFilter"
} )
export class ProductFilterPipe implements PipeTransform
{
    transform(products: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy
            ? products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
            : products;
    }

}