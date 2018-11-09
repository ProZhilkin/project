<template>
  <div class="content">
    <Channels v-show="true" />
    <List /> 
    <Player />
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex: 1;
  
  * {
    height: 100%;
    overflow-y: auto;
  }

  .channels {
    width: 15%;
  }

  .list {
    width: 30%;
  }

  .player {
    background: #eee;
    border-left: 1px solid #555;
    width: 70%;
  }
}
</style>

<script>
import Channels from './Channels.vue'
import List from './List.vue'
import Player from './Player.vue'

export default {
  components: {
    Channels,
    List,
    Player
  }
}
</script>