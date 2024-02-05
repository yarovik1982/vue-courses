//Svg.vue
<script setup>
import {defineProps} from 'vue'
import {defineAsyncComponent} from 'vue'
const props = defineProps({
   name:{
      type:String,
      required:true
   }
})
const icon = defineAsyncComponent(() => import(`../../assets/images/icons/${props.name}.svg`))
</script>
<template>
   
   <component :is="icon"/>
</template>
<style scoped >
*{
   color: #ff0101;
}
</style>