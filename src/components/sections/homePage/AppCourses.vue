<script setup>
import { courses } from '../../../use/useCards.js';
</script>
<template>
  <section id="courses">
    <div class="container section_container">
      <div class="section-block">
        <h2 class="section_title section_title__pos--left">Наши курсы</h2>
        <div class="section_header section_row--flex section_row--flex__gap-30">
          <p class="section_subtitle">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <a href="#" class="section_btn section_link">View All</a>
        </div>
        <div class="section_cards section_grid">
         <div class="section_card" v-for="item in courses" :key="item.id" :class="['course--' + item.id]">
            <div class="section_card-header">
              <div class="section_card-img">
                <img :src="item.image" :alt="['Course-' + item.id]" />
              </div>
              <div class="section_card-info">
                <div class="section_card-info__item">
                  <p class="section_card-subtitle course-duration">{{item.termin}}</p>
                  <p class="section_card-subtitle course-level">{{item.level}}</p>
                </div>
                <div class="section_card-info__item">
                  <p class="section_card-subtitle__bold course-autor">
                    By {{item.author}}
                  </p>
                </div>
              </div>
            </div>
            <div class="section_card-body">
              <div class="section_card-title">{{item.title}}</div>
              <div class="section_card-subtitle">
                {{item.description}}
              </div>
            </div>
            <div class="section_card-footer">
              <button class="card_btn--w100">Get it Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
