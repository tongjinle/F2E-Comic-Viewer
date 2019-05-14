<template>
  <div>
    <div id="pic">
      <img :src="imgSrc">
    </div>
    <div id="pages">
      <a class="prev" @click="showSlides(-1)">&#10094;</a>
      <span class="page">{{slideIndex+1}}/{{comicImages.length}}</span>
      <span class="mark" @click="mark()">mark it</span>
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
      id: "",
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
    async mark() {
      let id = this.id;
      let index = this.slideIndex;
      await utils.setFav(id, index);
    },
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
    let id = (this.id = this.$route.query.id);
    this.comicImages = (await utils.getContent(id))
      .sort((a, b) => {
        return b.index - a.index;
      })
      .map(n => n.url);
    console.log(id, this.comicImages);
    this.slideIndex = this.$route.query.index || 0;
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

#pages {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
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
  .page {
    font-size: 22px;
    color: #fff;
  }
  .mark {
    font-size: 22px;
    color: steelblue;
  }
}

@media screen and (max-width: 450px) {
  .prev,
  .next {
    background: #000 !important;
  }
}
</style>
