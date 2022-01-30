<template>
  <div class="card-info-container">
    <div class="top-card" @click="handlerShowMoreInfos">
      <span class="day">{{ this.dayNameBr }}</span>
      <span class="temp">{{ `${Math.trunc(temp)} º` }}</span>
      <img
        :src="weatherIcon"
        title="ícone representando a temperatura"
        alt="ícone representando a temperatura"
      />
    </div>
    <transition name="slide-fade">
      <div class="more-infos" v-show="showMoreInfos">
        <div class="more-info-row">
          <span class="more-info-label">Tempo:</span>
          <span class="more-info-content"> {{ weather }}</span>
        </div>
        <div class="more-info-row">
          <span class="more-info-label">Máx º:</span>
          <span class="more-info-content">
            {{ `${Math.trunc(maxTemp)} º` }}</span
          >
        </div>
        <div class="more-info-row">
          <span class="more-info-label">Min º:</span>
          <span class="more-info-content">
            {{ `${Math.trunc(minTemp)} º` }}</span
          >
        </div>
        <div class="more-info-row">
          <span class="more-info-label">Sen. térmica º:</span>
          <span class="more-info-content">
            {{ `${Math.trunc(feels_like)} º` }}</span
          >
        </div>
        <div class="more-info-row">
          <span class="more-info-label">Umidade %:</span>
          <span class="more-info-content">
            {{ `${Math.trunc(humidity)} %` }}</span
          >
        </div>
        <div class="more-info-row">
          <span class="more-info-label">Chuva %:</span>
          <span class="more-info-content"> {{ `${Math.trunc(pop)} %` }}</span>
        </div>
        <div class="more-info-row">
          <span class="more-info-label">Volume mm:</span>
          <span class="more-info-content"> {{ `${Math.trunc(rain)} mm` }}</span>
        </div>
        <div class="more-info-row">
          <span class="more-info-label">Neve %:</span>
          <span class="more-info-content"> {{ `${Math.trunc(snow)} %` }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Day Infos",
  data() {
    return {
      showMoreInfos: false,
    };
  },
  computed: {
    dayNameBr() {
      if (this.dayName.toLowerCase() === "today") return "Hoje";
      else if (this.dayName.toLowerCase() === "tomorrow") return "Amanhã";
      else return this.dayName;
    },
  },
  methods: {
    handlerShowMoreInfos() {
      this.showMoreInfos = !this.showMoreInfos;
    },
  },
  props: [
    "dayName",
    "nickDate",
    "localeDate",
    "temp",
    "minTemp",
    "maxTemp",
    "feels_like",
    "humidity",
    "weather",
    "pop",
    "rain",
    "snow",
    "weatherIcon",
  ],
};
</script>

<style scoped>
.card-info-container {
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0px 0px 3px 1px #dbd9d9;
  margin: 8px;
}

.top-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  padding: 0 8px;
}
.top-card:hover {
  cursor: pointer;
}

.day {
  width: 66px;
}

.more-infos {
  display: flex;
  flex-direction: column;
  padding: 0 12px;
}

.more-info-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 34px;
}

.more-info-label {
  width: 50%;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
}
.more-info-content {
  width: 50%;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
}

.slide-fade-enter-active {
  transition: all 0.4s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
