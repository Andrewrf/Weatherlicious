export class Location {
  constructor(public city: string, public locale: string, public key: number, public toggleCurrentCondition: boolean,
              public toggleForecast: boolean, public weatherText: string, public temp: number, public minTemp: number,
              public maxTemp: number, public forecastDesc: string) {}
}
