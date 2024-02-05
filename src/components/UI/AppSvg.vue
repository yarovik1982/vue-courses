<script setup>
const props = defineProps(['iconId'])
</script>
<template>
    <svg>
    <use :xlink:href="`./assets/images/icons/sprite.svg#${iconId}`"></use>
  </svg>
</template>
<style scoped >

</style>