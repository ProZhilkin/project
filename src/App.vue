<template>
  <div class="app">
    <Header />
    <Content />
  </div>
</template>

<style>
@import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css');

@font-face {
  src: url('/static/fonts/Roboto.ttf') format('truetype');
  font-family: 'Roboto';
}

body, html {
  height: 100%;
  margin: 0;
}

.app {
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'

export default {
  components: {
    Header,
    Content
  }
}
</script>