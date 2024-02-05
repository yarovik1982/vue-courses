<script setup>
import iconPlay from '/src/assets/images/icons/play.svg';
import video from '/src/assets/images/Container.png';
</script>
<template>
  <section id="video">
    <div class="container video-container">
      <button class="video-play">
        <!-- <img src="./images/icons/play.svg" alt="" /> -->
        <img :src="iconPlay" alt="" />
      </button>
      <img :src="video" alt="" />
    </div>
  </section>
</template>
<style scoped>
   #video{
   margin-top: 100px;
}
.video-container{
   position: relative;
}
.video-play{
   position: absolute;
   top: 50%;
   left: 50%;
   width: 72px;
   height: 72px;
   transform: translate(-50%,-50%);
   border-radius: 68px;
   border: 6px solid rgba(255, 255, 255, 0.30);
   background: rgba(255, 255, 255, 0.20);
   -webkit-transform: translate(-50%,-50%);
   -moz-transform: translate(-50%,-50%);
   -ms-transform: translate(-50%,-50%);
   -o-transform: translate(-50%,-50%);
}
.video-container img{
   width: 100%;
   object-fit: cover;
}
</style>
