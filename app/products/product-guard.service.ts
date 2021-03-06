///<reference path="../../node_modules/@angular/router/src/interfaces.d.ts"/>
import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";

@Injectable()
export class ProductDetailGuard implements CanActivate
{
    constructor( private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean
    {
        let id:number = +route.url[1].path;
        if ( isNaN(id) || id == 0 )
        {
            alert("Invalid Product ID");
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }

}