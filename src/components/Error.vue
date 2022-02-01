<template>
  <div class="error-message">
    <h3>
      Hum... Desta vez nós não encontramos nada, mas não fique desanimado. :)
    </h3>
    <h4>Tente buscar novamente.</h4>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style>
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  grid-column: 1/4;
}
</style>
