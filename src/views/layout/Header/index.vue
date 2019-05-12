<template>
<head id="header">
  <router-link class="home-link" :to="{name:'home'}" tag="div">
    <div class="title">Tea Comic</div>
  </router-link>
  <div class="github">
    <img src alt>
    <!-- <a href='https://github.com/runkids/F2E-Comic-Viewer' target="_blank"><i class="fab fa-github"></i></a> -->
  </div>
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
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    cursor: pointer;
    font-style: italic;
    font-weight: 900;
    font-size: 36px;
    color: $light_green;
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
