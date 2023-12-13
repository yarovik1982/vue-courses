<script setup>
import { menuData } from '../use/useMenu.js';

</script>
<template>
  <ul class="nav-list">
    <li class="nav-list-item"
      v-for="item in menuData" :key="item.id"
    >
      <RouterLink
        :to="item.path"
        class="nav-list-item-link"
        active-class="active"
        aria-translate
        data-eng="Home"
        data-ru="Главная"
      >
        {{item.titleEng}}
      </RouterLink>
    </li>
    
  </ul>
</template>
<style scoped>
.nav-list {
  display: flex;
  align-items: center;
  margin-left: 50px;
}
.nav-list-item-link {
  padding: 0.7778em 1.333em;
  font-size: 18px;
  color: #262626;
  border-radius: 8px;
  text-transform:capitalize ;
}
.nav-list-item-link:hover {
  background-color: #f1f1f3;
}
.nav-list-item-link.active{
  background-color: #f1f1f3;
}
</style>
