<template>
  <div class="header">
    <div class="left">
      <i class="icon fas fa-bars" @click="toggle"></i>
      <input class="search" placeholder="Поиск..." type="text">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: linear-gradient(0, #ddd, #eee);
  border-bottom: 1px solid #555;
  color: #333;
  display: flex;
  font-size: 18px;
  padding: 15px;

  .left {
    align-items: center;
    display: flex;
    width: 30%;

    .icon {
      padding-right: 15px;
    }

    .search {
      border: 0;
      display: block;
      flex: 1;
      min-width: 0;
      padding: 5px;
    }  
  }
}
</style>

<script>
export default {
  methods: {
    toggle () {
      this.$store.commit('toggleChannelsVisible')
    }
  }
}
</script>