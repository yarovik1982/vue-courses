<script setup>
import AppMenu from './AppMenu.vue';
import icon from '../assets/images/icons/Icon.png'

</script>
<template>
    <header class='header'>
      <div class="header-top-baner">
         <p class="header-top-baner-text">Free Courses 🌟 Sale Ends Soon, Get It Now
            <a href="#">
               <img :src="icon" alt="">
            </a>
         </p>
      </div>
      <AppMenu/>
   </header>
</template>
<style  scoped >
.header {
   /* padding: 20px; */
   margin-bottom: 100px;
}
.header-top-baner {
   font-size: 1.8rem;
   /* font-size: 18px; */
   margin: 0 auto;
   width: 97%;
   /* padding: 0.777778em 0; */
   /* padding: 14px 0; */
   background: #ff8600;
   border-radius: 8px;
}
.header-top-baner-text{
   font-size: 18px;
   padding: 0.7778em 0;
   text-align: center;
   /* line-height: 150%; */
   color:#fff;
   display: flex;
   justify-content: center;
}
.header-top-baner-text img{
   margin-left: 24px;
}
</style>