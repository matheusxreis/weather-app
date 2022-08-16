type WeatherInfoParams = {
    latitute:string,
    longitude:string
}

export interface GetWeatherResponse {
   main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
   },
   weather:{
       id:number,
       icon:string,
   }[],
   id: number,
   name: string
}
export interface iGetWeatherRepository {
getWeather(params: WeatherInfoParams):Promise<GetWeatherResponse>
}
