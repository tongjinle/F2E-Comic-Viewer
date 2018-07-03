<template>
  <div id="dbox">
    <img class="slideImgs" :src="require(`@/assets/images/${img}`)" v-for="img in adImages" :key="img">
  </div>
</template>

<script>
export default {
  data() {
    return {
      adImages: [
        'adavn-1.png',
        'adavn-2.png',
        'adavn-3.png',
      ],
    };
  },

  methods: {

  },

};
</script>

<style lang="scss">
@import '../assets/style/mixin.scss';
@import '../assets/style/color.scss';
@import '../assets/style/keyframes.scss';

#dbox{
  @include size(100%,120px);
  max-width:620px;
  margin-bottom:40px;
  // border: 1px solid $black_color;
  position: relative;
  .slideImgs{
    @include size(100%,100%);
    position: absolute;
    top:0;
    left:0;
    opacity: 0;
    filter: alpha(opacity=0);

    animation: silder 15s linear infinite;

    &:nth-child(1){
      animation-delay: 0s;
    }
    &:nth-child(2){
      animation-delay: 5s;
    }
    &:nth-child(3){
      animation-delay: 10s;
    }
  }
}
</style>
