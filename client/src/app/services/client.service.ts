import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl: string = `${environment.SERVER_URL}/${environment.SERVER_API_PREFIX}/client`;
  private httpOptions: any;

  clients: BehaviorSubject<any[]> = new BehaviorSubject([{}]);

  constructor(private http: HttpClient) {
    this.httpOptions = { withCredentials: true };
  }

  list(): Observable<any> {
    return this.http.get(this.baseUrl, this.httpOptions);
  }

  load(): void {
    this.http.get(this.baseUrl, this.httpOptions)
      .subscribe((res: any) => res && this.clients.next(res));
  }

}
