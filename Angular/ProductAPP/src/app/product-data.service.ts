import { HttpClient, HttpResponse } from '@angular/common/http';
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
    let response =  this.http.get<Product[]>(apiUrl,{headers:headers}).pipe(
      catchError(error=> this.HandleError(error))
    );
    return response;
  }

  PostAProduct(product: Product): Observable<Product>
  {
    // console.log(product);
    Object.defineProperty(product,'id',{'enumerable':false});
    const apiUrl = environment['apiBaseUrl']+'products/';
    const headers = {'content-type':'application/json','Accept':'application/json'}
    const body=JSON.stringify(product);
   
    return this.http.post<Product>(apiUrl,body,{headers:headers}).pipe(
      catchError(error=> this.HandleError(error))
    );
  }

  GetAProduct(id: number): Observable<Product>
  {
    const apiUrl = environment['apiBaseUrl']+'products/'+id;
    const headers = {'content-type':'application/json','Accept':'application/json'}
   
    return this.http.get<Product>(apiUrl, {headers:headers}).pipe(
      catchError(error=> this.HandleError(error))
    );
  }

  UpdateAProduct(product: Product)
  {
    const apiUrl = environment['apiBaseUrl']+'products/'+product.id;
    const headers = {'content-type':'application/json','Accept':'application/json'}
    const body=JSON.stringify(product);
   
    return this.http.put<Product>(apiUrl,body,{headers:headers}).pipe(
      catchError(error=> this.HandleError(error))
    );
  }

  DeleteAProduct(id:number)
  {
    const apiUrl = environment['apiBaseUrl']+'products/'+id;
    const headers = {'content-type':'application/json','Accept':'application/json'};
    return this.http.delete<Product>(apiUrl,{headers:headers}).pipe(
      catchError(error=> this.HandleError(error))
    );
  }
  
  HandleError(error: any)
  {
    return throwError(error);
  }
}
