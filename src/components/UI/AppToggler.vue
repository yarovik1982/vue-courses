//AppToggler.vue
<script setup>
import {ref, watchEffect} from 'vue'

const checked = ref(false)
const setStatus = () => {
   checked.value = !checked.value
}
const emit = defineEmits(['update:checked'])
watchEffect(() => {
  emit('update:checked', checked.value)
})
</script>
<template>
  <div>
    <input type="checkbox" 
      :checked="checked" 
      class="user-status" 
      id="userStatus"
      @change="setStatus" 
   />
    <label
      for="userStatus"
      class="toggle"
      data-default="student"
      data-selected="author"
    >
      <span>Toggler</span>
    </label>
  </div>
</template>
<style scoped>
.toggle {
   font-size: 1.6rem;
   border: .125em solid #ff9500;
   border-radius: 2em;
   cursor: pointer;
   display: block;
   height: 2em;
   position: relative;
   width: 10em;
}
.toggle span {
   background-color: #ffab35;
   border-radius: 2em;
   display: block;
   height: 1.75em;
   width: 5em;
   left: 0;
   overflow: hidden;
   position: absolute;
   top: 0;
   text-indent: -9999px;
   transition: all .25s;
   z-index: 2;
   -webkit-transition: all .25s;
   -moz-transition: all .25s;
   -ms-transition: all .25s;
   -o-transition: all .25s;
}
.toggle::after {
   color: #ff9500;
   right: 0.9em;
   top: 50%;
   content: attr(data-selected);
   display: block;
   position: absolute;
   z-index: 10;
   transform: translateY(-50%);
}
.toggle::before {
   left: 0.9rem;
   top: 50%;
   content: attr(data-default);
   display: block;
   position: absolute;
   color: #eefff4;
   z-index: 10;
   transform: translate(0, -50%);
   -webkit-transform: translate(0, -50%);
   -moz-transform: translate(0, -50%);
   -ms-transform: translate(0, -50%);
   -o-transform: translate(0, -50%);
}
input:checked~.toggle span {
   left: 4.75em;
}
input:checked~.toggle::after {
   color: #eefff4;
}
input:checked~.toggle::before {
   color: #ff9500;
}
.user-status {
   position: absolute;
   width: 0;
   height: 0;
   opacity: 0;
}
</style>
