<template>
  <div id='home'>
    <section class="section">
      <div class="mainPic">
        <img :src="require('@/assets/images/comic_cover.png')">
      </div>
      <div class="comicInfo">
        <div class="bookName">MY HEXSCHOOL</div>

        <div class="genres">
          <span>Genres:</span>
          <div>Fusce/vehicula/dolor</div>
        </div>

        <div class="author">
          <span>Author:</span>
          <div>Namae Shiranai</div>
        </div>

        <div class="status">
          <span>Status:</span>
          <div>Ongoing</div>
        </div>

        <div class="rate">
          <span>Rate:</span>
          <div>
            <el-rate v-model="comic.rate" disabled show-score
              text-color="#ff9900" score-template="{value}">
            </el-rate>
          </div>
        </div>

        <div class="summary">
          <div>Summary:</div>
          <div>
            If your banker breaks, you snap;
            if your apothecary by mistake sends you
            poison in your pills, you die.

            Therefore, I say, I saw that this situation
            of mine was the precise situation of
            every mortal that has this Siamese connexion
            with a plurality of other mortals.
          </div>
        </div>

      </div>

    </section>

    <sprites-ad-box/>

    <div class="chapter_menu">
      <div class="title">
        All Chapters
      </div>
      <div class="chapters">
        <router-link :to="{name:'gallery'}" tag="div" class="chapter">
          <span>Chapter 1: The F2E Challenge Start!</span>
        </router-link>
        <router-link :to="{name:'gallery'}" tag="div" class="newChapter">
          <span>Chapter 2: Todo List is Going Crazy!</span>
        </router-link>
      </div>
    </div>

    <ad-box></ad-box>

  </div>
</template>

<script>
import AdBox from '@/components/AdBox';
import SpritesAdBox from '@/components/SpritesAdBox';

export default {
  components: {
    AdBox,
    SpritesAdBox,
  },
  data() {
    return {
      comic: {
        rate: 4,
      },
    };
  },
};

</script>

<style lang="scss">
@import '../../../assets/style/main.scss';

#home{
  @include size(100%,100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto-Bold';

  .section{
    display: flex;
    margin: 40px auto;

    .mainPic{
      @include size(292px,438px);
      border: 4px solid $black_color;
      > img{
        @include size(100%,100%);
      }
    }

    .comicInfo{
      > *{
        &:not(.bookName){
          display: flex;
          margin-top: 15px;
          line-height: 24px;
          font-size: 16px;
          > span{
            @include size(52px,24px);
            text-align: left;
            padding-left: 20px;
            font-weight: bold;
          }
          > div{
            text-align: left;
            padding-left: 20px;
          }
        }
      }

      .bookName{
        @include size(317px,52px);
        background-color: $black_color;
        color: $white_color;
        font-size: 36px;
        line-height: 52px; //文字上下置中
        text-align: center;
        &::after,&::before{ // clearfix
          content: "";
          display: flex;
          clear: both;
        }
      }

      .summary{
        display: flex;
        flex-direction: column;
        :first-child{
          font-weight: bold;
        }
        :last-child{
          @include size(300px,202px);
          margin-top: 8px;
          overflow-y: scroll;
          &::-webkit-scrollbar{
            background-color: $white_color;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #5555556c;
          }
          &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
            background-color: $white_color;
          }
        }
      }

    }
  }

  .chapter_menu{
    @include size(620px,100%);
    margin-bottom: 40px;
    .title {
      @include size(181px,44px);
      background-color: $black_color;
      color: $white_color;
      font-size: 24px;
      line-height: 44px;
      text-align: center;
      font-weight: bold;
    }
    .chapters{
      border: 4px solid $black_color;
      min-height: calc(106px - 44px);

      > .chapter,.newChapter {
        cursor: pointer;
        max-width: 620px;
        height: 50px;
        line-height: 50px;
        padding-left: 24px;
        margin-top: 10px;
        transition-duration: .4s;

        &:hover{
          background-color: $black_color;
          color: $white_color;
        }

        &:last-child{
          margin-bottom: 10px;
        }

      }

      .newChapter{
        &::after{
          content: "NEW";
          @include size(55px,18px);
          background-color: $black_color;
          color:$light_green;
          margin-left: 20px;
          padding: 2px 5px;
          animation: 2.5s new linear infinite;
        }
      }

    }
  }

}
@media screen and (max-width: 450px){
  .section{
    display: flex;
    flex-direction: column;

    .mainPic{
      width: calc(414px - 80px) !important;
    }
  }
  .chapter_menu{
     max-width: calc(100% - 40px ) !important;
     .chapters{
       overflow: auto;
       > .chapter,.newChapter {
         width: 1000px !important;
       }
     }
  }
}
</style>
