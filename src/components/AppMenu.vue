<script setup>
import AppNav from './AppNav.vue'
import logo from '../assets/images/Logo.png'
</script>
<template>
  <nav class="header-nav nav">
    <div class="container header-container">
      <div class="nav-logo">
        <img :src="logo" alt="" />
      </div>

      <AppNav/>
      
      <div class="nav-auth">
        <button
          id="register"
          class="nav-auth-btn"
          aria-translate
          data-eng="Sign Up"
          data-ru="Регистрация"
        >
          Sign Up
        </button>
        <button
          id="login"
          class="nav-auth-btn nav-auth-btn-active"
          aria-translate
          data-eng="Login"
          data-ru="Авторизация"
        >
          Login
        </button>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.header-nav {
   margin-top: 20px;
}
.header-container{
   display: flex;
   align-items: center;
}

.nav-auth {
  margin-left: auto;
}
.nav-auth-btn {
  padding: 14px 34px;
  color: #262626;
  font-size: 18px;
  border-radius: 8px;
  border: 0;
  background-color: transparent;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
}
.nav-auth-btn:hover {
  color: #fff;
  background: #ff9500;
}
.nav-auth-btn.nav-auth-btn-active {
  color: #fff;
  background: #ff9500;
}
</style>
