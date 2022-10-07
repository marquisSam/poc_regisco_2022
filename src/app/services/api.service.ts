import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TaskModel } from '../store/store.models';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http :HttpClient) { }

  // private apiUlrEndPoint = "https://api-dev.regisco.ca/api/interview-tasks";
  private apiUlrEndPoint = "http://localhost:4200/api/interview-tasks";

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  fetchTask = () => this.http.get<TaskModel[]>(this.apiUlrEndPoint, { 'headers': this.headers })
  
}