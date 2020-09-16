<template>
  <div id="home">
    <!-- 轮播图 -->
    <my-swiper />
    <!-- 菜单 -->
    <van-grid class="bg-white mt-3" :border="false" :column-num="4">
      <van-grid-item class="grid-item" v-for="(item,index) in grid" :key="index">
        <div class="item">
          <i class="icon pb-1"></i>
          <div class="value text-dark">{{item}}</div>
        </div>
      </van-grid-item>
    </van-grid>
    <!-- 展开收起 -->
    <div class="exit" @click="isShowMenu = !isShowMenu">
      <i
        class="icon iconfont"
        :class="{'icon-zhankai': isShowMenu,'icon-zhankai1': !isShowMenu}"
      >{{isShowMenu?"收起":"展开"}}</i>
    </div>
    <!-- 新闻资讯 -->
    <my-list :icon="newsList.icon" :title="newsList.title" :list="newsList.titles">
      <div v-for="(item,index) in newsList.data" :key="index" :slot="'list' + index">
        <ul class="list" v-for="(value,indey) in item" :key="indey">
          <li class="d-flex jc-between ai-center pb-4">
            <span class="sort fs-sm">{{value.categoryName}}</span>
            <span class="flex-1 mx-2 fs-lg text-ellipsis">{{value.title}}</span>
            <span class="fs-sm">{{value.createdAt | date}}</span>
          </li>
        </ul>
      </div>
    </my-list>
    <!-- 英雄列表 -->
    <my-list :icon="heroList.icon" :title="heroList.title" :list="heroList.titles">
      <ul
        class="d-flex f-wrap jc-start ai-center heros"
        v-for="(item,index) in heroList.data"
        :key="index"
        :slot="'list' + index"
      >
        <li class="list" v-for="(value,indey) in item" :key="indey">
          <img class="hero-img" :src="value.avatar" alt />
          <div class="fs-sm">{{value.name}}</div>
        </li>
      </ul>
    </my-list>
  </div>
</template>

<script>
import MySwiper from "components/common/MySwiper";
import MyList from "components/common/MyList";

import { getNewsList, getHeroList } from "api";
import { formatDate } from "tools";

export default {
  name: "Home",
  data() {
    return {
      grid: ["爆料站", "故事站", "周边商城", "体验服"],
      addGrid: [
        "新人专区",
        "荣耀 传承",
        "模拟战资料库",
        "王者营地",
        "公众号",
        "版本介绍",
        "对局环境",
        "无限王者团",
        "创意互动营"
      ],
      isShowMenu: false,
      newsList: {
        title: "新闻资讯",
        icon: "icon-zixun",
        titles: [],
        data: []
      },
      heroList: {
        title: "英雄列表",
        icon: "icon-card-hero",
        titles: [],
        data: []
      }
    };
  },
  methods: {
  },
  components: {
    MySwiper,
    MyList
  },
  filters: {
    date(value) {
      return formatDate(value, "MM/DD");
    }
  },
  created() {
    getNewsList().then(res => {
      this.newsList.titles = res.map(item => item.name);
      this.newsList.data = res.map(item => item.newsList);
    });
    getHeroList().then(res => {
      this.heroList.titles = res.map(item => item.name);
      this.heroList.data = res.map(item => item.heroList);
    });
  },
  watch: {
    isShowMenu(newVal, oldVal) {
      if (newVal) {
        this.grid = [...this.grid, ...this.addGrid];
      } else {
        this.grid.splice(4, this.grid.length - 4);
      }
    }
  }
};
</script>

<style lang="scss">
.grid-item {
  width: 25%;
  height: 5.3846rem;
  padding: 1rem 0;
  .van-grid-item__content {
    padding: 0.8462rem 0;
    border-right: 0.0769rem solid #d4d9d1;
    text-align: center;
    .icon {
      display: block;
      margin: 0 auto;
      width: 1.7692rem;
      height: 1.5385rem;
      background: url("~assets/image/sprite.png") 63.546% 15.517% no-repeat;
      background-size: 28.8462rem 35rem;
    }
  }
}
.grid-item:nth-child(4n) {
  .van-grid-item__content {
    border-right: 0.0769rem solid transparent;
  }
}

.custom-indicator {
  position: absolute;
  right: 0.3846rem;
  bottom: 0.3846rem;
  padding: 0.1538rem 0.3846rem;
  font-size: 0.9231rem;
  background: rgba(0, 0, 0, 0.1);
}
</style>

<style lang="scss" scoped>
.exit {
  width: 100%;
  height: 2.3077rem;
  background: #f9f9f9;
  text-align: center;
  line-height: 2.3077rem;
  i {
    font-size: 0.9231rem;
  }
}

.list {
  margin-right: 1rem;
  .sort {
    color: #db9e3f;
    padding: 0.0769rem;
    border: 0.0769rem solid #db9e3f;
    border-radius: 0.2308rem;
  }
}

.heros {
  min-width: 0;
  .list {
    text-align: center;
    width: 20%;
    margin: 0;
    padding: 0 5px 5px 5px;
    box-sizing: border-box;
    .hero-img {
      width: 100%;
    }
  }
}
</style>

