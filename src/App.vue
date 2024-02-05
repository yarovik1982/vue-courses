<script setup>
import AppHeader from './components/AppHeader.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const widthDevise = ref(window.innerWidth);

const updateWidth = () => {
  widthDevise.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<template>
  <div class="info__block_fixed">{{ widthDevise }}</div>
  <AppHeader/>
  <main class="main">
   <RouterView/>
  </main>
</template>

<style scoped>
.info__block_fixed {
  font-size: 1.2rem;
  position: fixed;
  width: fit-content;
  padding: .5em .75em ;
  background-color: rgb(255, 70, 70);
  letter-spacing: .25em;
  font-weight: bold;
  color: beige;
  bottom: 0;
}
</style>
