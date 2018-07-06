<template>
  <div id="gallery" :class="switchValue?'moon':'sun'">

    <div class="utils">
      <div>My Hexschool <span>&#10095;</span></div>
      <div>
        <el-select v-model="slideIndex" placeholder="請選擇" @change="currentSlide(slideIndex)">
          <el-option
            v-for="(item,index) in comicImages"
            :key="index"
            :label="index===0?`Cover`:`Page ${index}`"
            :value="index+1">
          </el-option>
        </el-select>
      </div>
      <div>
        <div :class="switchValue?'moon':'sun'">
          <i class="fas fa-sun"></i>
        </div>
        <div >
          <el-switch v-model="switchValue" active-color="#50ff44" inactive-color="#4c4c4c" />
        </div>
        <div :class="switchValue?'moon':'sun'">
          <i class="fas fa-moon"></i>
        </div>
      </div>
    </div>

    <div class="slides" v-for="img in comicImages" :key="img">
      <img :src="require(`@/assets/images/${img}`)">
    </div>
    <a class="prev" @click="showSlides(-1)">&#10094;</a>
    <a class="next" @click="showSlides(1)">&#10095;</a>

    <div class="row">
      <a class="prev second" @click="showSlides(-1)">&#10094;</a>
      <div class="inner">
        <ul>
          <li class="column" v-for="(img,index) in comicImages" :key="index" :data-page="index">
            <img :src="require(`@/assets/images/${img}`)" @click="currentSlide(index+1)">
          </li>
        </ul>
      </div>
      <a class="next second" @click="showSlides(1)">&#10095;</a>
    </div>

    <ad-box/>

  </div>

</template>

<script>
import AdBox from '@/components/AdBox';

export default {
  components: {
    AdBox,
  },
  data() {
    return {
      switchValue: false,
      slideIndex: 1,
      comicImages: [
        'comic_cover.png',
      ],
    };
  },

  methods: {
    currentSlide(n) {
      this.slideIndex = n;
      this.showSlides(0);
    },
    showSlides(index) {
      this.slideIndex += index;
      const slides = document.querySelectorAll('.slides');
      const column = document.querySelectorAll('.column');
      const inner = document.querySelector('.inner');
      const width = document.querySelector('.inner>ul').clientWidth;

      if (this.slideIndex > slides.length) {
        this.slideIndex = slides.length;
        return;
      }
      if (this.slideIndex < 1) {
        this.slideIndex = 1;
        return;
      }

      [...slides].forEach((d) => {
        d.style.display = 'none';
      });

      [...column].forEach((d, i) => {
        column[i].className = column[i].className.replace(' active', '');
      });

      slides[this.slideIndex - 1].style.display = 'block';
      column[this.slideIndex - 1].className += ' active';
      inner.scrollTo((width / this.comicImages.length) * ((this.slideIndex) - (this.comicImages.length / 4)), 0);
    },
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('.slides')[0].style.display = 'block';
      document.querySelectorAll('.column')[0].className += ' active';

      for (let i = 1; i <= 12; i += 1) {
        this.comicImages.push(`storyboard-${i}.png`);
      }
    });
  },

};
</script>

<style lang="scss">
@import '../../../assets/style/main.scss';

.sun{
  background-color: rgba(185, 178, 178, 0.1);
}

.moon{
  background-color: rgb(0, 0, 0);
  color: $white_color;
}
#gallery{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px auto;

  .el-input__inner {
    border: 2px solid black;
    border-radius: initial;
  }

  .utils{
    @include size(100%,80px);
    margin: 40px auto -50px auto;
    max-width: 800px;
    > * {
      float: left;
      &:nth-child(1){
        font-family: 'Roboto-Bold';
        font-size: 20px;
        margin: 10px 10px 0 0;
      }
      &:nth-child(3){
        display: flex;
        align-items: center;
        float: right;
        padding-top: 10px;
        > *{
          padding: 0 5px 0 5px;
        }
      }
    }
  }

  .row{
    margin: 30px auto;
    display: flex;
    > a {
      &:nth-child(1){
        margin-right: 10px;
      }
      &:last-child{
        margin-left: 10px;
      }
    }
    .inner{
      max-width: 620px;
      overflow-x: scroll;
      height: 150px;
      display: flex;
      &::-webkit-scrollbar{
        background-color: $white_color;
      }
      &::-webkit-scrollbar-thumb {
        background-color: $black_color;
        border: 2px solid #555555;
      }
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 9px rgba(0,0,0,0.3);
        background-color: $white_color;
      }
      > ul{
        display: inline-flex;
      }
      .column{
        @include size(100px,120px);
        opacity: 0.6;
        display: inline-block;
        > img {
          @include size(100%,100%);
          cursor: pointer;
        }
      }
      .active{
        box-sizing: border-box;
        opacity: 1 !important;
        border: 4px solid $black_color;
        position: relative;
        &::before{
          content: attr(data-page);
          @include size(20px,15px);
          display: flex;
          color: $white_color;
          margin: 0 auto;
          justify-content: center;
          position: absolute;
          left: 50%;
          right: 50%;
          transform: translateX(-50%);
          background-color: $black_color;
        }
      }
    }
  }

  .slides {
    display: none;
    position: relative;
    > img {
      max-height: 1000px;
    }
    :first-child{
      margin-top: 50px;
    }
  }
  .prev,.next {
    cursor: pointer;
    position: absolute;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
    height: 200px;
    line-height: 200px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .next {
    right: 10%;
    border-radius: 3px 0 0 3px;
  }
  .prev {
    left: 10%;
    border-radius: 3px 0 0 3px;
  }
  .prev:hover,.next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .second{
    position: initial;
    height: 100px;
    line-height: 100px;
    background-color: rgba(0, 0, 0, 0.8);
  }
}

@media screen and (max-width: 450px){
  #gallery{
    .utils{
      display: none;
    }
    .row{
      max-width: 414px;
      float: none;
    }
    .slides {
      > img {
        max-width: 414px;
      }
    }
    .prev,.next {
      padding: 9px;
      height: 20px;
      line-height: 20px;
      top: 60%;
    }
    .prev{
      left: 0;
    }
    .next {
      right: 0;
    }
    .second{
      height: 60px;
      line-height: 60px;
    }
  }
}
</style>
