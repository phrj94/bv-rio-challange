<template>
  <div class="home">
    <h1>Bem-vindo!</h1>
    <span>
      Esta é uma aplicação que retorna para você os dados meteorológicos de
      acordo com a cidade que você digitou. Para isto, é necessário realizar um
      cadastro no <strong><a href="https://openweathermap.org/">OpenWeatherMap</a></strong> e criar uma appId. Após realizar o
      cadastro e adquirir uma appId válida, você só precisa digitá-lá no campo
      de input abaixo e começar a sua pesquisa pelas condições meteorológicas de
      qualquer cidade do mundo! :)
    </span>
    <h4>Divirta-se!</h4>
    <div class="content">
      <input
        type="password"
        v-model="appId"
        placeholder="Entre com sua appId"
      />

      <button @click="handlerInput">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      appId: "",
    };
  },
  mounted() {
    if (localStorage.appId) this.appId = localStorage.appId;
  },
  methods: {
    handlerInput() {
      localStorage.appId = this.appId;
      this.$router.push("/previsao");
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #262572;
}

h1,
h4,
span {
  color: #ffffff;
}
a,a:link{
    color: #ffffff;
}

.content {
  width: 320px;
  height: 200px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-items: center;
  justify-content: space-around;
  background: center;
  box-shadow: 0px 0px 3px slategrey;
}

input:focus {
  outline: none;
}
input {
  height: 36px;
  width: 100%;
  border: none;
  border-bottom: 1px inset gainsboro;
  padding: 4px;
}
</style>