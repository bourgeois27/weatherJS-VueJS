<template>
  <div id="app">
    <div class="container">
      <!-- header -->
      <div class="page-header">
        <h1><i class="material-icons" style="font-size:0.8em; color: #ffbb33;">wb_sunny</i>WeatherJS</h1>
        <hr>
      </div>

      <div class="alert alert-danger" role="alert">
        <span class="badge badge-pill badge-danger">Attention</span> Attendre que la latitude et la longitude s'affichent avant d'utiliser les boutons
      </div>
      <!-- coords -->
      <p>Voici votre latitude: {{ latitude }}</p>
      <p>Voici votre longitude: {{ longitude }}</p>

      <!-- geolocation -->
      <app-geolocation
          :city="city"
          :state="state">
      </app-geolocation>
      
      <!-- forecast -->
      <app-forecast
          :forecast="forecast">
      </app-forecast>
    </div>
      <!-- footer -->
      <footer class="footer">
        <p>- Laboratoire #6 -</p>
      </footer>
  </div>
</template>

<script>
import * as api from '@/api';
import Geolocation from './components/Geolocation.vue';
import Forecast from './components/Forecast.vue';

export default {
  name: 'app',
  data() {
    return {
      latitude: '',
      longitude: '',
      city: '',
      state: '',
      forecast: []
    }
  },
  components: {
    appGeolocation: Geolocation,
    appForecast: Forecast
  },
  async created() {
    const {latitude, longitude, city, state, forecast} = await api.getForecast();
    this.latitude = latitude;
    this.longitude = longitude;
    this.city = city;
    this.state = state;
    this.forecast = forecast;
  }
}
</script>

<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f4f4;
    margin: 0;
    padding: 0;   
  }
  
  footer {
    width: 100%;
    background-color: blue;
    color: #fff;
    text-align: center;
    position: fixed;
    bottom: 0;
    padding-top: 15px;
  }
</style>
