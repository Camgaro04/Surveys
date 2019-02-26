import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/surveys.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {
  surveys: any[] = [];
  constructor(private surveyService: SurveyService) {
    this.surveyService.getAllSurveys().subscribe((data: any) => {
      this.surveys = data;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }


}
