import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  entityName: string = 'product'
  apiUrl: string = `${environment.apiUrl}/${this.entityName}`
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
}

