import { Component, OnInit } from '@angular/core';
import { RequestsService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-regisco';
  constructor(
    private req : RequestsService
  ) { }

  ngOnInit(): void {
    this.req.fetchTask()
      .subscribe((data) => {
        console.log(data)
      });
  }
}
