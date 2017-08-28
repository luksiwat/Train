import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';


@Injectable()
export class CompanyService {

  constructor(private http: Http) { }

  loadItem(): Observable<any[]> {   //GET
    //return this.http.get('http://localhost:3000/company')  //return object แบบ reactive ทำแบบไม่รอกัน
    return this.http.get(`${environment.apiUrl}/company`) //เรียก port จาก environment
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));
  }

  addItem(body): Observable<any> {  //POST
    let bodyString = JSON.stringify(body);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      `${environment.apiUrl}/company`, bodyString, options)
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));
  }

  deleteItem(id): Observable<any> {  //DELETE
    return this.http.delete(`${environment.apiUrl}/company/${id}`) //เรียก port จาก environment
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));

  }
  findById(id): Observable<any> {  //ดึงข้อมูลไปแสดง รอการedit
    return this.http.get(`${environment.apiUrl}/company/findById/${id}`) 
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));
  }

  updateItem(id,body): Observable<any> {  //PUT for Edit
    let bodyString = JSON.stringify(body);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(
      `${environment.apiUrl}/company/${id}`, bodyString, options)
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));
  }

  search(body): Observable<any> {  //POST for search
    let bodyString = JSON.stringify(body);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      `${environment.apiUrl}/company/search`, bodyString, options)
      .map((res: Response) => {
        return res.json()
      })
      .catch((error: any) => Observable.throw(error));

  }
}
