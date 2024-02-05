//RegisterView.vue
<script setup>
import AppToggler from "../components/UI/AppToggler.vue";
import { ref , watch} from "vue";

const typeInput = ref("password");
const typeConfirmInput = ref("password");
const userStatus = ref(false);
// const router = useRouter();

const toggleTypeInput = () => {
  typeInput.value = typeInput.value === "password" ? "text" : "password";
};
const toggleTypeConfirmInput = () => {
  typeConfirmInput.value =
    typeConfirmInput.value === "password" ? "text" : "password";
};
const updateUserStatus = (status) => {
  userStatus.value = status;
};

const name = ref("");
const email = ref("");
const password = ref('');
const confirmPassword = ref('');
const passwordsMatch = ref(true);

const checkPasswordsMatch = () => {
  passwordsMatch.value = password.value === confirmPassword.value;
  console.log(passwordsMatch.value);
};

watch([password, confirmPassword], checkPasswordsMatch);

 


const submitForm = () => {
  let studentData, authorData;
  if (userStatus.value) {
    studentData = {
      studentName: name.value,
      studentEmail: email.value,
      studentPassword: password.value,
    };
  } else {
    authorData = {
      authorName: name.value,
      authorEmail: email.value,
      authorPassword: password.value,
    };
  }
  console.log(studentData || authorData);
};
</script>
<template>
  <form action="#" id="login" class="form" @submit.prevent="submitForm">
    <div class="form-header">
      <h2>Регистрация</h2>
    </div>
    <div class="form-body">
      <div class="form-row">
        <label for="userName"></label>
        <input
          type="text"
          name="userName"
          placeholder="Name"
          id="userName"
          v-model="name"
        />
      </div>

      <div class="form-row">
        <label for="userEmail"></label>
        <input
          type="email"
          name="userEmail"
          placeholder="Email"
          id="userEmail"
          v-model="email"
        />
      </div>

      <div class="form-row">
        <label for="userPassword"></label>
        <input
          :type="typeInput"
          name="userPassword"
          placeholder="Password"
          id="userPassword"
          v-model="password"
        />
        <i
          class="bi bi-eye-slash"
          v-if="typeInput === 'password'"
          @click="toggleTypeInput"
        ></i>
        <i class="bi bi-eye" v-else @click="toggleTypeInput"></i>
      </div>

      <div class="form-row" :class="{isUnConfirmed:password && !passwordsMatch}">
        <label for="confirmPassword"></label>
        <input
          :type="typeConfirmInput"
          name="confirmPassword"
          placeholder="Password"
          id="confirmPassword"
          v-model="confirmPassword"
          @change="checkPasswordsMatch"
        />
        <i
          class="bi bi-eye-slash"
          v-if="typeConfirmInput === 'password'"
          @click="toggleTypeConfirmInput"
        ></i>
        <i class="bi bi-eye" v-else @click="toggleTypeConfirmInput"></i>
        <p v-if="password && !passwordsMatch" class="notificate">Пароли не совпадают</p>
      </div>
      <div class="form-status">
        <AppToggler @update:checked="updateUserStatus" />
      </div>
    </div>
    <div class="form-footer">
      <button type="submit" class="btn-submit" :disabled="!passwordsMatch">отправить</button>
    </div>
  </form>
</template>
<style scoped>
.form {
  margin: 0 auto;
  width: 40%;
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
  transition: all .3s ease;
}
.form-row.isUnConfirmed{
  box-shadow: 0 0 5px 2px #af1b1b;
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
</style>
