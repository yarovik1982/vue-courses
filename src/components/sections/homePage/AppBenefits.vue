<script setup>
import CardBenefits from './CardBenefits.vue';

</script>
<template>
  <section id="benefits">
    <div class="container section_container">
      <div class="section-block">
        <h2 class="section_title section_title__pos--left">Преимущества</h2>
        <div class="section_header section_row--flex">
          <p class="section_subtitle">
            Сотрудничество с нами - это выгодно! Мы предлагаем высокое качество,
            надежность, инновационные решения и отличный сервис. Присоединяйтесь
            к нам!
          </p>
          <a href="#" class="section_btn section_link">View All</a>
        </div>
        <CardBenefits/>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
