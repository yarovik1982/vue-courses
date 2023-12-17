//useForm.js
export const dataForm = {
   'login':[
      {id:'login', title:'Авторизация', 
         template: `<div class="form-body">
                        <div class="form-row">
                           <label for="userEmail"></label>
                           <input type="email" name="userEmail" placeholder="userEmail" id="userEmail">
                        </div>
               
                        <div class="form-row">
                           <label for="userPassword"></label>
                           <input :type="typeInput" name="userPassword" placeholder="userPassword" id="userPassword">
                           <i class="bi bi-eye" v-if="typeInput === 'password'" @click="toggleTypeInput"></i>
                           <i class="bi bi-eye-slash" v-else @click="toggleTypeInput"></i>
                        </div>

                     </div>
                     <div class="form-footer">
                        <button type="submit" class="btn-submit">отправить</button>

                           <p>Нет аккаунта? 
                              <span
                                 @click="router.push('/register')"
                              >Зарегистрироваться</span>
                           </p>
                    </div>`
      },
   ],
   'register':[
      {id:'register', title:'Регистрация', 
         template: ``
      },
   ],
}