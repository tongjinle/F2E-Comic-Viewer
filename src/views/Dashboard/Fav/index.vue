<template>
  <div>
    <div id="title">我的收藏列表</div>
    <div id="fav-list">
      <div class="fav-item" v-for="(item,index) in list" :key="index" @click="goto(item)">
        <div class="id">{{item.id}}</div>
        <div class="index">第{{item.index-0+1}}页</div>
        <div class="remove" @click.stop="remove(item.id)">删除收藏</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as utils from "@/utils";
export default {
  components: {},
  data() {
    return {
      list: []
    };
  },

  methods: {
    async remove(id) {
      await utils.removeFav(id);
      this.list = this.list.filter(item => item.id !== id);
    },
    goto(item) {
      let { id, index } = item;
      this.$router.replace({
        path: "/dashboard/gallery",
        query: { id, index }
      });
    }
  },

  async beforeMount() {
    this.list = await utils.getFavList();
  }
};
</script>

<style lang="scss">
@import "../../../assets/style/main.scss";
#title {
  height: 40px;
  display: flex;
  align-items: center;
}
#fav-list {
  .fav-item {
    display: flex;
    height: 10vh;
    max-height: 40px;
    margin-bottom: 5px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #fff;
    }
    .id {
      width: 25%;
      background: olivedrab;
    }
    .index {
      flex: 1;
      cursor: pointer;
      background-color: gray;
    }
    .remove {
      cursor: pointer;
      width: 35%;
      background: rgba(255, 0, 0, 0.9);
    }
  }
}

@media screen and (max-width: 450px) {
  #gallery {
    .utils {
      display: none;
    }

    .slides {
      width: 100vw;
      overflow: hidden;
      > img {
        // max-width: 100vw;
        height: 80vh;
      }
    }
  }
}
</style>
