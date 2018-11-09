<template>
  <div class="list">
    <Channels />
    Videosos
  </div>
</template>

<style>
.list {
  position: relative;
}
</style>

<script>
import Channels from './Channels.vue'

export default {
  components: {
    Channels
  }
}
</script>