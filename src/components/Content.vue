<template>
  <div class="content">
    <Channels />
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
    width: 55%;
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