import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class ResourceloadService {
  private apiUrl = 'https://rjn9hw68jj.execute-api.ap-south-1.amazonaws.com/dev/Resourceload';


  constructor(private http: HttpClient) {}

  // Method to add rows (POST request)
  addRows(data: any): Observable<any> {
    const url = `${this.apiUrl}/addRows`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, JSON.stringify(data), { headers });
  }
  

  // Method to update total resource (PUT request)
  updateTotalResource(rfp_no: number, sum: number): Observable<any> {
    const url = `${this.apiUrl}/updateTotalResource?rfp_no=${rfp_no}&sum=${sum}`;
    return this.http.put(url, null);
  }

  // Method to get data (GET request)
  getData(rfp_no: number): Observable<any> {
    const url = `${this.apiUrl}/getData?RfpNum=${rfp_no}`;
    return this.http.get(url);
  }

  // Method to delete data (DELETE request)
  deleteRow(id: string, rfp_no: number): Observable<any> {
    const url = `${this.apiUrl}/deleteRow`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { id, RfpNum: rfp_no };
    return this.http.delete(url, { headers, body });
  }
}
