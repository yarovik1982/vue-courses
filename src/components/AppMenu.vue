<script setup>
import AppNav from './AppNav.vue'
import AppButton from './UI/AppButton.vue';
import logo from '../assets/images/Logo.png'
import {ref} from 'vue'
import { useRouter } from 'vue-router';

const isRegisterActive = ref(false)
const isLoginActive    = ref(false)
const router           = useRouter()
</script>
<template>
  <nav class="header-nav nav">
    <div class="container header-container">
      <div class="nav-logo">
        <img :src="logo" alt="" />
      </div>

      <AppNav/>
      
      <div class="nav-auth">
        <AppButton
          :class="{activeBtn: isRegisterActive}" 
          class="nav-auth-btn" 
          id="register" 
          @click="isRegisterActive = !isRegisterActive; isLoginActive = false"
        >
          Sign Up
        </AppButton>
        <AppButton 
          :class="{activeBtn: isLoginActive}" 
          class="nav-auth-btn" 
          id="login"
          @click="router.push('/login')"
        >
          Login
        </AppButton>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.header-nav {
   margin-top: 2rem;
}
.header-container{
   display: flex;
   align-items: center;
}

.nav-auth {
  margin-left: auto;
}
.nav-auth-btn {
  padding: 1.4rem 3.4rem;
  /* padding: 14px 34px; */
  color: #262626;
  font-size: 1.8rem;
  border-radius: 8px;
  border: 0;
  background-color: #fff;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
}
.nav-auth-btn:last-child{
  margin-left: 10px;
}
.nav-auth-btn:hover {
  color: #fff;
  background: #ff9500;
}
.nav-auth-btn.activeBtn {
  color: #fff;
  background: #ff9500;
}
</style>
