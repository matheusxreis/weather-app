
export type WeatherStoreParams = {
city:string,
actualTemperature:string,
minTemperature: string,
maxTemperature: string,
photo?:string,
lastConsult:number,
id: string
}
export interface iStoreWeatherRepository {
    storeWeather(params: WeatherStoreParams):Promise<void>,
    findConsultByName(cityId: string): Promise<WeatherStoreParams>
}
