# Weather App


### Sobre

Weather App é um aplicativo de clima, que consulta a [OpenWeatherApi](https://openweathermap.org/api) para informar o clima em 5 grandes cidades do mundo: São Paulo, Nova York, Tokyo, Paris e Amsterdam e armazena as consultas no Firebase.


### Tecnologias utilizadas:

 - **React JS**: para construir a UI;
 - **Redux**: para gerenciar os estados;
 - **Axios**: para consumir a API;
 - **Typescript**: desde o Typescript, não há porque não usá-lo;
- **Firestore Database**: para armazenamento das últimas consultas.
- **React Firebase Hooks**: para facilitar a atualização de dados em tempo real utilizando o firebase.

### Como rodar:

Para rodar a aplicação é necessário que você tenha um app registrado no Firebase e uma conta na OpenWeatherApi.

Possuindo as contas, dê um git clone.

```bash
    git clone https://github.com/matheusxreis/weather-app
```

Em seguida, altera o nome do arquivo **.env-example** apenas para **.env** e coloque os valores correspondentes.

A BASE_URL deve ser: **https://api.openweathermap.org/data/2.5/**.

O restando é variado. Na API_KEY você deve colocar a chave que a API te proporcionou após o cadastro. Já os dados do Firebase devem ser os que o google lhe disponibilizou em relação ao app.

Geralmente nas configurações do seu app no console do Firebase você encontra algo como:

```js
const firebaseConfig = {
  apiKey: "api_key",
  authDomain: "auth_domain",
  projectId: "project_id",
  storageBucket: "storage_bucket",
  messagingSenderId: "messaging_sender_id",
  appId: "app_id"
};
```

Essas são as informações que devem ser passadas para as variáveis de ambiente de acordo com o nome.


```bash
BASE_URL=https://api.openweathermap.org/data/2.5/
API_KEY=your_weather_api_key

FB_API_KEY=your_firebase_api_key
FB_AUTH_DOMAIN=your_firebase_auth_domain
FB_PROJECT_ID=your_firebase_project_id
FB_STORAGE_BUCKET=your_firebase_storage_bucket
FB_MESSAGING_SENDER_ID=your_firebase_messaging_sender
FB_APP_ID=your_firebase_app_id
```
Após atribuido os valores para as variáveis, basta:

```bash

yarn dev

```

E o projeto estará disponível para acessar na porta **8080**.

Também é possível rodar via Docker:

```bash
docker build -t app:1.0.0 .
docker run -it -p 8080:8080 app:1.0.0
```