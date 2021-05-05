import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './Product';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }

  GetAllProducts():Observable<Product[]>
  {
    const apiUrl = environment['apiBaseUrl']+'products/';
    const headers = {'content-type':'application/json'}
    return this.http.get<Product[]>(apiUrl,{headers:headers}).pipe(
      tap(data=>console.log(data)),
      catchError(error=>{
        return throwError(error);
      })
    );
  }

  PostAProduct(product: Product): Observable<Product>
  {
    // console.log(product);
    Object.defineProperty(product,'id',{'enumerable':false});
    const apiUrl = environment['apiBaseUrl']+'products/';
    const headers = {'content-type':'application/json','Accept':'application/json'}
    const body=JSON.stringify(product);
    console.log(body);
    return this.http.post<Product>('https://localhost:44355/api/products/',body,{headers:headers}).pipe(
      tap(data => console.log(data)),
      catchError(error=>{
        return throwError(error);
      })
    );
  }

  
}
