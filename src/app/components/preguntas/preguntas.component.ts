import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/surveys.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  questions: any[] = [];
  constructor(private surveyService: SurveyService) {
    this.surveyService.getAllQuestions().subscribe((data: any) => {
      this.questions = data;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
