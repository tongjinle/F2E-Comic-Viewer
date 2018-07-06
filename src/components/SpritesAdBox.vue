<template>
  <div class="adavn-sprites">
    <div class="sprites-row"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },

};
</script>

<style lang="scss">
@import '../assets/style/main.scss';

.adavn-sprites{
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  margin-bottom:40px;
  .sprites-row {
    cursor: pointer;
    width: 620px;
    height: 120px;
    background-image: url('../assets/images/adavn-sprites.png');
    animation: sprites 50s linear infinite;
    &:hover{
      animation-play-state: paused;
    }
  }
}
</style>
