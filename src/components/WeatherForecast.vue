<template>
  <div class="main-section">
    <div class="top-section">
      <div class="inputs">
        <input
          type="text"
          name="city"
          title="Digite uma cidade"
          v-model="city"
          @keypress.enter="getResults"
        />
      </div>
      <button class="send" @click="getResults">Enviar</button>
    </div>
    <h2>Previsão do tempo para: {{ city }}</h2>
    <div class="results">
      <Error v-show="!loading && hasError" />
      <Loader v-if="loading" />
      <template v-if="!loading">
        <div v-for="dayInfo in dayWeekInfos" :key="dayInfo">
          <DayInformations
            :dayName="dayInfo.nickDate || dayInfo.dayName"
            :localeDate="dayInfo.localeDate"
            :temp="dayInfo.temp || 0"
            :minTemp="dayInfo.minTemp || 0"
            :maxTemp="dayInfo.maxTemp || 0"
            :feels_like="dayInfo.feels_like || 0"
            :humidity="dayInfo.humidity || 0"
            :weather="dayInfo.weather"
            :pop="dayInfo.pop || 0"
            :rain="dayInfo.rain || 0"
            :snow="dayInfo.snow || 0"
            :weatherIcon="dayInfo.wheaterIcon"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import DayInformations from "./DayInformations.vue";
import Loader from "./Loader.vue";
import Error from "./Error.vue";

import { getForecastWeatherByCity } from "../services/tempService";
import weekDays from "../constants/weekDays";
export default {
  name: "Whether Forecast",
  data() {
    return {
      city: "Rio de Janeiro",
      hasError: false,
      loading: false,
      header: [],
      dayWeekInfos: [],
    };
  },
  async mounted() {
    try {
      const res = await getForecastWeatherByCity(this.city);
      this.weatherByDay(res.daily);
      this.hasError = false;
    } catch (error) {
      this.hasError = true;
      console.error("Error to get city data: ", error);
    }
  },
  watch: {
    city() {
      this.dayWeekInfos = [];
    },
  },
  methods: {
    async getResults() {
      try {
        this.loading = true;
        const res = await getForecastWeatherByCity(this.city);
        this.loading = false;
        this.weatherByDay(res.daily);
        this.hasError = false;
      } catch (error) {
        this.dayWeekInfos = [];
        this.loading = false;
        this.hasError = true;
        console.error("Error to get city data: ", error);
      }
    },
    weatherByDay(days) {
      this.dayWeekInfos = days?.map((day) => {
        const date = new Date(day.dt * 1000);

        return {
          dayName: weekDays[date.getDay()],
          nickDate: this.getTodayOrTomorrow(date),
          localeDate: date.toLocaleDateString(),
          temp: day.temp.day,
          minTemp: day.temp.min,
          maxTemp: day.temp.max,
          feels_like: day.feels_like.day,
          humidity: day.humidity,
          weather: day.weather[0].description,
          pop: day.pop,
          rain: day.rain,
          snow: day.snow,
          wheaterIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          alerts: day.alerts,
        };
      });
    },
    getTodayOrTomorrow(date) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (date.toLocaleDateString() === today.toLocaleDateString())
        return "Today";
      else if (date.toLocaleDateString() === tomorrow.toLocaleDateString())
        return "Tomorrow";
      else return null;
    },
  },
  components: { DayInformations, Loader, Error },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-section {
  width: 100%;
  height: 100%;
}
.exit {
  position: absolute;
  top: 8px;
  right: 8px;
}

.top-section {
  margin-bottom: 16px;
  padding: 8px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.inputs {
  display: flex;
  height: 36px;
  justify-content: space-between;
}

input:focus {
  outline: none;
}

.send {
  width: 54px;
}

@media only screen and (min-width: 360px) {
  .results {
    display: grid;
    grid-template-columns: 316px;
    grid-template-rows: repeat(8, auto);
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
  }
}

@media only screen and (min-width: 680px) {
  .results {
    grid-template-columns: repeat(2, 316px);
    grid-template-rows: repeat(4, auto);
  }
}

@media only screen and (min-width: 1024px) {
  .results {
    grid-template-columns: repeat(3, 316px);
    grid-template-rows: repeat(3, auto);
  }
}

@media only screen and (min-width: 1340px) {
  .results {
    grid-template-columns: repeat(4, 316px);
    grid-template-rows: repeat(2, auto);
  }
}
</style>
