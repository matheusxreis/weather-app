import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/'
});

export { api };
