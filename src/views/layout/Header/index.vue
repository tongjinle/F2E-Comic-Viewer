<template>
  <head id='header'>
    <router-link :to="{name:'home'}" tag="div">
      <div class="title">Comicomic</div>
    </router-link>
    <div class='github'>
      <a href='https://github.com/runkids/F2E-Comic-Viewer' target="_blank"><i class="fab fa-github"></i></a>
    </div>
  </head>
</template>

<script>
export default {
};
</script>


<style lang="scss">
  @import '../../../assets/style/mixin.scss';
  @import '../../../assets/style/color.scss';
  @import '../../../assets/style/keyframes.scss';

  #header{
    background-color: $black_color;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74px;
    position: relative;
    .title{
      cursor: pointer;
      font-style: italic;
      font-weight: 900;
      font-size: 36px;
      color: $light_green;
    }
    .github{
      position: absolute;
      right: 20px;
      a{
        color: #fff;
        &:visited{
          color: #fff;
        }
      }
      i{
        font-size: 35px;
        cursor: pointer;
        &:hover{
          animation: .8s github alternate infinite;
        }
      }
    }
  }
</style>
