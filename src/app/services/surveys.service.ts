import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private httpClient: HttpClient) {

  }

  getBaseQuery(query: String) {
    const BASEQUERY = `http://localhost:8080/${ query }`;
    return this.httpClient.get(BASEQUERY);
  }

  getAllSurveys() {
    return this.getBaseQuery('survey').pipe(map((data: any) => {
      return data;
    }));
  }

  getAllQuestions() {
    return this.getBaseQuery('questions').pipe(map((data: any) => {
      return data;
    }));
  }
}
