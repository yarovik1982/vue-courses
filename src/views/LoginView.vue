<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const typeInput = ref("password");
const router = useRouter();
const isChecked = ref(false)

const toggleTypeInput = () => {
  typeInput.value = typeInput.value === "password" ? "text" : "password";
};
</script>
<template>
  <form action="#" id="login" class="form">
    <div class="form-header">
      <h2>Авторизоваться</h2>
    </div>
    <div class="form-body">
      <div class="form-row">
        <label for="userEmail"></label>
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          id="userEmail"
        />
      </div>

      <div class="form-row">
        <label for="userPassword"></label>
        <input
          :type="typeInput"
          name="userPassword"
          placeholder="Password"
          id="userPassword"
        />
        <i
          class="bi bi-eye-slash"
          v-if="typeInput === 'password'"
          @click="toggleTypeInput"
        ></i>
        <i class="bi bi-eye" v-else @click="toggleTypeInput"></i>
      </div>
      <div class="form-check">
        <label for="check">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             fill="none"
             class="bi bi-check-square"
             viewBox="0 0 16 16"
           >
             <path
               d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
               fill="#ff9500"
             />
             <path
               v-if="isChecked"
               class="checked"
               d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
               fill="#ff9500"
             />
           </svg>
          <input type="checkbox" name="mem" id="check" class="check" @change="isChecked = !isChecked"/>
        </label>
      </div>
    </div>
    <div class="form-footer">
      <button type="submit" class="btn-submit">отправить</button>

      <p>
        Нет аккаунта?
        <span @click="router.push('/register')">Зарегистрироваться</span>
      </p>
    </div>
  </form>
</template>
<style scoped>
.form {
  margin: 0 auto;
  width: 30%;
  min-width: 320px;
  padding: 24px 16px;
  border-radius: 12px;
  box-shadow: 0 0 20px 0px #ff9500;
  background-color: #fff;
}
.form-header {
  margin-bottom: 16px;
}
.form-row {
  height: 40px;
  box-shadow: 0 0 5px 2px #ff9500;
  border-radius: 8px;
  position: relative;
}
.form-row:not(:last-child) {
  margin-bottom: 24px;
}
.form-row i {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s linear;
  color: #ff9500;
}
.form-row input {
  width: 100%;
  height: 100%;
  outline: none;
  border: 0;
  border-radius: 8px;
  padding: 0 16px;
}
.form-footer {
  padding-top: 16px;
}
.btn-submit {
  padding: 8px 24px;
  background-color: rgb(168, 114, 219);
  color: #fff;
  border: 0;
  border-radius: 8px;
  margin-bottom: 24px;
}
.form-footer p {
  text-align: center;
  font-size: 18px;
}
.form-footer p span {
  cursor: pointer;
  color: #ff9500;
}
.check{
   width: 0;
   height: 0;
   opacity: 0;
}
</style>
