import { Injectable } from '@angular/core';
import { ItemDetail, QueryItems } from '../server/routes/api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const PATH = '/api';

/**
 * Service that wrap the calls to the backend
 */
@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  /**
   * Returns a list of items based on the string query
   * @param query string for search
   */
  queryItems(query: string): Observable<QueryItems> {
    return this.http.get<QueryItems>(`${PATH}/items?q=${query}`);
  }

  /**
   * Get the detail information of the item
   * @param id ItemId
   */
  getItem(id: string): Observable<ItemDetail> {
    return this.http.get<ItemDetail>(`${PATH}/items/${id}`);
  }

}
