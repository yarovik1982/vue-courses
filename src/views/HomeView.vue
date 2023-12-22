<script setup>
import AppHero from '../components/sections/homePage/AppHero.vue';
import AppVideo from '../components/sections/homePage/AppVideo.vue';
import AppBenefits from '../components/sections/homePage/AppBenefits.vue';
import AppCourses from '../components/sections/homePage/AppCourses.vue';

const props = defineProps(['sectionId'])
</script>
<template>
    <AppHero/>
    <AppVideo/>
    <AppBenefits :id="sectionId"/>
    <AppCourses :id="sectionId"/>
</template>
<style  scoped >
h1{
    text-align: center;
}
</style>