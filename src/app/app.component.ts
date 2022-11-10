import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  public weatherData: any = [];

  ngOnInit(): void {
    this.weatherService.getWeatherData('wellington').subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(this.weatherData);
      },
    });
  }
}
