<template>
  <div class="channels">
    <div class="item" v-for="item in items">
      <div class="icon fas fa-angle-right"></div>
      <div class="title">{{ item.title }}</div>
      <div class="count">{{ item.count }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.channels {
  background: #eee;
  padding: 15px;
  
  .item {
    align-items: center;
    display: flex;
    padding: 5px;

    &:hover {
      background: #111;
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
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 },
        { title: 'Android News', count: 228 },
        { title: 'Test', count: 15 }
      ]
    }
  }
}
</script>