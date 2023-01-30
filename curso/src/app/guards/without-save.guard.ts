import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithoutSaveGuard implements CanDeactivate<unknown> {
  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.hasUser()){
      return true;
    }
    return confirm('Tienes cambios sin guardar');
  }

  hasUser():boolean{
    return false;
  }
  
}
