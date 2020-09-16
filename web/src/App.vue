<template>
  <div id="app" class="bg-main">
    <top-tab class="top-tab" />
    <div class="nav pt-3 pb-2 bg-primary d-flex jc-evenly ai-center text-white">
      <h2
        class="pb-1"
        v-for="item in navData"
        :key="item.id"
        :class="{'active':currentIndex === item.id}"
        @click="changeNav(item.id)"
      >
        <router-link tag="div" :to="item.link">{{item.name}}</router-link>
      </h2>
    </div>
    <router-view />
  </div>
</template>

<script>
import TopTab from "components/common/TopTab";
export default {
  data() {
    return {
      currentIndex: 0,
      navData: [
        {
          id: 0,
          name: "首页",
          link: "/"
        },
        {
          id: 1,
          name: "攻略中心",
          link: "/strategy"
        },
        {
          id: 2,
          name: "赛事中心",
          link: "/match"
        }
      ]
    };
  },
  methods: {
    changeNav(id) {
      this.currentIndex = id;
    }
  },
  components: {
    TopTab
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/variables";
#app {
  background-color: map-get($map: $colors, $key: major);
}
.top-tab{
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>

