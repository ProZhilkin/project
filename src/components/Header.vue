<template>
  <div class="header">
    <div class="left">
      <i class="icon fas fa-bars"></i>
      <input class="search" placeholder="Поиск..." type="text">
    </div>
    <div class="right">
      <i class="icon fas fa-redo"></i>
      Sample Text
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: linear-gradient(0, #ddd, #eee);
  color: #333;
  display: flex;
  font-size: 18px;
  padding: 15px;

  .left {
    align-items: center;
    display: flex;
    width: 15%;

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

  .right {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 30%;

    .icon {
      padding-right: 15px;
    }
  }
}
</style>