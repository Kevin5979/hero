<template>
  <div id="top-nav">
    <div class="nav pt-3 pb-2 bg-primary px-5 d-flex jc-around ai-center text-white">
      <h2 class="active pb-1">
        <router-link tag="div" to="/">首页</router-link>
      </h2>
      <h2 class="pb-1">
        <router-link tag="div" to="/">攻略中心</router-link>
      </h2>
      <h2 class="pb-1">
        <router-link tag="div" to="/">赛事中心</router-link>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav"
};
</script>

<style lang="scss" scoped>
.nav {
  h2 {
    border-bottom: 3px solid transparent;
    &.active {
      border-bottom: 3px solid #fff;
    }
  }
}
</style>