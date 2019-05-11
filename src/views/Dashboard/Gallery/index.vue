<template>
  <div>
    <div id="pic">
      <img :src="imgSrc">
    </div>
    <div id="pages">
      <a class="prev" @click="showSlides(-1)">&#10094;</a>
      <span>{{slideIndex+1}}/{{comicImages.length}}</span>
      <a class="next" @click="showSlides(1)">&#10095;</a>
    </div>
  </div>
</template>

<script>
import * as utils from "@/utils";
export default {
  components: {},
  data() {
    return {
      switchValue: false,
      slideIndex: 0,
      comicImages: []
    };
  },
  computed: {
    imgSrc() {
      return this.comicImages[this.slideIndex];
    }
  },

  methods: {
    currentSlide(n) {
      this.slideIndex = n;
      this.showSlides(0);
    },
    showSlides(index) {
      this.slideIndex += index;
      this.slideIndex =
        this.slideIndex < 0
          ? 0
          : this.slideIndex >= this.comicImages.length
          ? this.comicImages.length - 1
          : this.slideIndex;
    }
  },

  async beforeMount() {
    let id = this.$route.query.id - 0;

    this.comicImages = await utils.getContent(id);
    console.log(id, this.comicImages);
    this.slideIndex = 0;
  }
};
</script>

<style lang="scss">
@import "../../../assets/style/main.scss";

.sun {
  background-color: rgba(185, 178, 178, 0.1);
}

.moon {
  background-color: rgb(0, 0, 0);
  color: $white_color;
}
#pic {
  height: 80vh;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
  }
}
#gallery {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px auto;

  .el-input__inner {
    border: 2px solid black;
    border-radius: initial;
  }

  .slides {
    height: 100%;
    position: relative;
    > img {
      height: 100%;
      // max-height: 1000px;
    }
  }
}
#pages {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .prev,
  .next {
    cursor: pointer;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
    height: 30px;
    line-height: 30px;
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
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .second {
    position: initial;
    height: 100px;
    line-height: 100px;
    background-color: rgba(0, 0, 0, 0.8);
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
