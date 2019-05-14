<template>
  <div id="home">
    <section class="section">
      <div class="mainPic" v-for="(item, index) in list" :key="index">
        <div class="title">
          <span>{{item.title+' '+item.count+'页'}}</span>
        </div>
        <img :src="item.logo" @click="goto(item.title)">
      </div>
    </section>
  </div>
</template>

<script>
import * as utils from "@/utils/index";
export default {
  components: {},
  data() {
    return {
      list: [],
      comic: {
        rate: 4
      }
    };
  },
  methods: {
    goto(id) {
      console.log(id);
      // console.log(this.$router);
      this.$router.replace({ path: "/dashboard/gallery", query: { id } });
    }
  },
  async mounted() {
    this.list = await utils.getComicList();
  }
};
</script>

<style lang="scss">
@import "../../../assets/style/main.scss";

#home {
  @include size(100%, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto-Bold";

  .section {
    display: flex;
    margin: 40px auto;
    justify-content: space-around;
    width: 80vw;
    .mainPic {
      // @include size(20vw, 438px);
      width: 30vw;
      // border: 4px solid $black_color;
      margin-bottom: 1vh;
      // padding: 0 10px;
      > img {
        @include size(100%, 100%);
      }
      .title {
        height: 40px;
        display: flex;
        align-items: center;
        span {
          padding: 10px 0 10px 5px;
          color: #fff;
          border-radius: 5px;
          background-color: steelblue;
        }
      }
    }

    .comicInfo {
      > * {
        &:not(.bookName) {
          display: flex;
          margin-top: 15px;
          line-height: 24px;
          font-size: 16px;
          > span {
            @include size(52px, 24px);
            text-align: left;
            padding-left: 20px;
            font-weight: bold;
          }
          > div {
            text-align: left;
            padding-left: 20px;
          }
        }
      }

      .bookName {
        @include size(317px, 52px);
        background-color: $black_color;
        color: $white_color;
        font-size: 36px;
        line-height: 52px; //文字上下置中
        text-align: center;
        &::after,
        &::before {
          // clearfix
          content: "";
          display: flex;
          clear: both;
        }
      }

      .summary {
        display: flex;
        flex-direction: column;
        :first-child {
          font-weight: bold;
        }
        :last-child {
          @include size(300px, 202px);
          margin-top: 8px;
          overflow-y: scroll;
          &::-webkit-scrollbar {
            background-color: $white_color;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #5555556c;
          }
          &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
            background-color: $white_color;
          }
        }
      }
    }
  }

  .chapter_menu {
    @include size(620px, 100%);
    margin-bottom: 40px;
    .title {
      @include size(181px, 44px);
      background-color: $black_color;
      color: $white_color;
      font-size: 24px;
      line-height: 44px;
      text-align: center;
      font-weight: bold;
    }
    .chapters {
      border: 4px solid $black_color;
      min-height: calc(106px - 44px);

      > .chapter,
      .newChapter {
        cursor: pointer;
        max-width: 620px;
        height: 50px;
        line-height: 50px;
        padding-left: 24px;
        margin-top: 10px;
        transition-duration: 0.4s;

        &:hover {
          background-color: $black_color;
          color: $white_color;
        }

        &:last-child {
          margin-bottom: 10px;
        }
      }

      .newChapter {
        &::after {
          content: "NEW";
          @include size(55px, 18px);
          background-color: $black_color;
          color: $light_green;
          margin-left: 20px;
          padding: 2px 5px;
          animation: 2.5s new linear infinite;
        }
      }
    }
  }
}
@media screen and (max-width: 450px) {
  .section {
    display: flex;
    flex-direction: column;

    .mainPic {
      width: 100% !important;
      // width: calc(414px - 80px) !important;
    }
  }
  .chapter_menu {
    max-width: calc(100% - 40px) !important;
    .chapters {
      overflow: auto;
      > .chapter,
      .newChapter {
        width: 1000px !important;
      }
    }
  }
}
</style>
