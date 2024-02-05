<script setup>
import AppHero from '../components/sections/homePage/AppHero.vue';
import AppVideo from '../components/sections/homePage/AppVideo.vue';
import AppBenefits from '../components/sections/homePage/AppBenefits.vue';
import AppCourses from '../components/sections/homePage/AppCourses.vue';
import AppPartners from '../components/sections/homePage/AppPartners.vue';
</script>
<template>
    <AppHero/>
    <AppPartners/>
    <AppVideo/>
    <AppBenefits/>
    <AppCourses/>
</template>
<style  scoped >
h1{
    text-align: center;
}
</style>