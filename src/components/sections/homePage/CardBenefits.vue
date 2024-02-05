<script setup>

import { benefits } from "../../../use/useCards.js";

</script>
<template>
  <div class="section_cards section_row--flex-wrap section_row--flex__gap-20">
    <div
      class="section_card section_card-item"
      v-for="item in benefits"
      :key="item.id"
    >
      <div class="cestion_card-header" :data-text="0 + String(item.id)"></div>
      <div class="section_card-body">
        <h3 class="section_card-title">{{ item.title }}</h3>
        <p class="section_card-subtitle">
          {{ item.description }}
        </p>
      </div>
      <div class="section_card-footer">
        <div class="section_row__inner-pos-right">
          <button class="section_card-btn section_card-link">
            <img :src="item.icon" alt="ICON" />
            <!-- <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon">
                <path
                  id="Vector (Stroke)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.87344 25.1266C9.37136 25.6245 10.1786 25.6245 10.6766 25.1266L22.95 12.8531V22.525C22.95 23.2292 23.5208 23.8 24.225 23.8C24.9292 23.8 25.5 23.2292 25.5 22.525V9.775C25.5 9.07084 24.9292 8.5 24.225 8.5H11.475C10.7708 8.5 10.2 9.07084 10.2 9.775C10.2 10.4792 10.7708 11.05 11.475 11.05H21.1469L8.87344 23.3234C8.37552 23.8214 8.37552 24.6286 8.87344 25.1266Z"
                  fill="#FF9500"
                />
              </g>
            </svg> -->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
