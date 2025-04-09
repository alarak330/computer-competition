<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  /* background: url('./assets/img/pageBg.png') no-repeat center center; */
  background-size: cover;
  background-position: center center;
  overflow: hidden;
}
@font-face {
	font-family: fg; 
	src: url("./assets/css/ztk.ttf") format("truetype");
}
</style>
