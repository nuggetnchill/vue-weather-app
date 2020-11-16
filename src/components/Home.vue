<template>
  <div class="home">
    <div class="row ">
      <div class="col-8 offset-2 ">
        <div class="input-group p-3">
          <input
            v-model="location"
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
          <div class="card-header">Current Weather</div>
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
    <pre>{{ weatherData }}</pre>
  </div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      location: '',
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
    API.getData().then((data) => {
      this.weatherData = data;
    });
  },
  methods: {
    updateLocation() {
      console.log(this.location);
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
