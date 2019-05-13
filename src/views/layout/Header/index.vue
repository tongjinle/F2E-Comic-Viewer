<template>
<head id="header">
  <router-link class="home-link" :to="{name:'home'}" tag="div">
    <div class="title">首页</div>
  </router-link>
  <div class="big-title">Tea漫画</div>
  <router-link class="fav-link" :to="{name:'fav'}" tag="div">
    <div class="title">收藏列表</div>
  </router-link>
</head>
</template>

<script>
export default {};
</script>


<style lang="scss">
@import "../../../assets/style/main.scss";

#header {
  background-color: $black_color;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 74px;
  position: relative;
  .home-link {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      color: steelblue;
      font-size: 22px;
    }
  }
  .big-title {
    text-align: center;
    justify-content: center;
    width: 60%;
    font-style: italic;
    font-weight: 900;
    font-size: 36px;
    color: $light_green;
  }
  .fav-link {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      color: steelblue;
      font-size: 22px;
    }
  }
  .github {
    position: absolute;
    right: 20px;
    a {
      color: #fff;
      &:visited {
        color: #fff;
      }
    }
    i {
      font-size: 35px;
      cursor: pointer;
      &:hover {
        animation: 0.8s github alternate infinite;
      }
    }
  }
}
</style>
