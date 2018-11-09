<template>
  <transition name="slide">
    <div class="channels" v-show="visible">
      <div class="item" v-for="item in items">
        <div class="icon fas fa-angle-right"></div>
        <div class="title">{{ item.title }}</div>
        <div class="count">{{ item.count }}</div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.slide-enter, .slide-leave-to {
  max-width: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s;
}

.slide-enter-to, .slide-leave {
  max-width: 100%;
}

.channels {
  background: #ddd;
  border-right: 1px solid #555;
  padding: 15px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  
  .item {
    align-items: center;
    display: flex;
    padding: 5px;

    &:hover {
      background: #ADA9A9;
    }

    .icon {
      padding-right: 3px;
    }

    .title {
      flex: 1;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 }
      ]
    }
  },
  computed: {
    visible () {
      return this.$store.getters.channelsVisible
    }
  }
}
</script>