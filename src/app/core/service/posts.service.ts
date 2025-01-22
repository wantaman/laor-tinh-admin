import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DriversService } from '@core/interceptor/drivers.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  api = ''

  ngOnInit(): void {
    this.getData()
  }

  constructor(private http: HttpClient, private driversService:DriversService) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.api);
  }
}
