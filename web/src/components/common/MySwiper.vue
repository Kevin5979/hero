<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img src="~assets/tempImg/banner/banner1.jpeg" alt />
    </van-swipe-item>
    <van-swipe-item>
      <img src="~assets/tempImg/banner/banner2.jpeg" alt />
    </van-swipe-item>
    <van-swipe-item>
      <img src="~assets/tempImg/banner/banner3.jpeg" alt />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "MySwiper"
};
</script>

<style lang="scss">
@import "~assets/scss/variables";
.my-swipe {
  width: 100%;
  height: 12.3077rem;
  .van-swipe-item {
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #39a9ed;
    img {
      width: 100%;
      height: 12.3077rem;
    }
  }
  .van-swipe__indicators {
    left: 90%;
    .van-swipe__indicator {
      width: 0.6154rem;
      height: 0.6154rem;
      border-radius: 0.2308rem;
      background: map-get($colors, "white");
      opacity: 1;
      &.van-swipe__indicator--active {
        background-color: map-get($colors, "primary") !important;
      }
    }
  }
}
</style>