<template>
  <div class="top-tab d-flex ai-center p-2 bs px-4">
    <img src="~assets/image/logo.png" class="logo" alt />
    <div class="title mx-3 flex-1">
      <h1 class="fs-md text-white">王者荣耀</h1>
      <p class="fs-xxs text-grey mt-2">团队成就更多</p>
    </div>
    <i class="download"></i>
  </div>
</template>

<script>
export default {
  name: "TopTab"
};
</script>

<style lang="scss" scoped>
.top-tab {
  background: url(~assets/image/sprite.png) no-repeat 0 87.195%;
  background-size: 100% 455px;
  width: 100%;
  height: 3.4615rem;
  .logo {
    width: 2.4615rem;
    height: 2.4615rem;
  }
  .download {
    background: url(~assets/image/sprite.png) no-repeat 18.73% 71.694%;
    background-size: 28.8462rem 35rem;
    width: 4.6154rem;
    height: 1.8462rem;
  }
}
</style>