<template>
  <div class="list px-4 py-3">
    <div class="title d-flex jc-between pb-3">
      <i class="icon iconfont mr-2 fs-xxl" :class="icon"></i>
      <h3 class="flex-1 fs-xl">{{title}}</h3>
      <i class="icon iconfont icon-gengduo1"></i>
    </div>
    <div class="tabs d-flex jc-between py-4">
      <div
        class="tab"
        v-for="(item,index) in list"
        :key="index"
        :class="{'active':index===current}"
        @click="onChange(index)"
      >{{item}}</div>
    </div>
    <van-swipe class="mt-1" ref="swipe" :show-indicators="false" :loop="false" @change="onChange">
      <van-swipe-item v-for="(item,index) in list" :key="index" class="swipe-item">
        <div ref="slot">
          <slot :name="'list' + index"></slot>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "MyList",
  props: {
    icon: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      current: 0,
      realHeights: []
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
      this.$refs.swipe.swipeTo(index, false);
      this.realHeights = this.$refs.slot.map(item => item.offsetHeight);
      this.$refs.swipe.$el.style.height = this.realHeights[index] + "px";
      this.$refs.swipe.$el.style.transition = "all .5s";
    }
  },
  created() {
    setTimeout(() => {
      this.onChange(0);
    }, 200);
  }
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 15px;
  background: #fff;
  .title {
    border-bottom: 1px solid #ededed;
    i {
      font-weight: bold;
      font-size: 1.3846rem;
    }
  }
  .tabs {
    .tab {
      padding-bottom: 3px;
      border-bottom: 3px solid transparent;
      &.active {
        color: #db9e3f;
        border-bottom: 3px solid #db9e3f;
      }
    }
  }
}
</style>