<template>
  <div class="home">
    <div class="row ">
      <div class="col-8 offset-2 ">
        <div class="input-group p-3">
          <input
            v-model="location"
            v-on:keyup.enter="updateLocation"
            type="text"
            class="form-control "
            placeholder="Enter Location"
          />
          <div class="input-group-append">
            <button
              @click="updateLocation"
              class="btn btn-secondary"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2 text-center" v-if="weatherData">
        <div class="card text-white bg-dark mb-3 ">
          <div class="card-header">
            {{ address }}
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ weatherData.currently.summary }}</h4>
            <div class="card-text temp-icon">
              <span class="emoji">{{ icons[weatherData.currently.icon] }}</span>
              {{ weatherData.currently.temperature }}℉
            </div>
            <div class="card-text">
              {{ weatherData.currently.precipProbability }}% chance of
              precipitation
            </div>
            <div class="card-text">
              Wind: {{ weatherData.currently.windSpeed }}MPH
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      location: localStorage.location || '',
      address: localStorage.address || '',
      weatherData: null,
      icons: {
        'clear-day': '🌞',
        'clear-night': '✨',
        rain: '☔️',
        snow: '⛄️',
        sleet: '🍦',
        wind: '💨',
        fog: '🐸',
        cloudy: '☁️',
        'partly-cloudy-day': '⛅️',
        'partly-cloudy-night': '🌃',
        hail: '🧊',
        thunderstorm: '🌀',
        tornado: '🌪️',
      },
    };
  },
  mounted() {
    this.getWeather(
      localStorage.lat || '37.697948',
      localStorage.lng || '-97.314835',
    );
  },
  methods: {
    getWeather(lat, lng) {
      localStorage.lat = lat;
      localStorage.lng = lng;
      API.getData(lat, lng).then((data) => {
        API.getAddress(lat, lng).then((response) => {
          this.address = [response.name, response.street].join(' - ');
          localStorage.address = this.address;
        });
        this.weatherData = data;
      });
    },
    updateLocation() {
      localStorage.location = this.location;
      API.getCoordinates(this.location).then((response) => {
        this.getWeather(response.latitude, response.longitude);
      });
    },
  },
};
</script>

<style>
body {
  font-size: 2rem;
}

.temp-icon {
  font-size: 3rem;
}

.emoji {
  font-size: 4rem;
}
</style>
