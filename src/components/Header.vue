

<template>

  <body>
  <nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"><fa icon="bars"/></i>

    </label>
    <label class="logo"><img src="../img/Logo-removebg-preview.png" height="80" width="80"/> </label>
    <ul  class="navigation">
     <li><router-link class="link" :to="{ name: 'home'}">Home</router-link></li>
      <li><router-link class="link" :to="{ name: 'article' }">Impact Tracer</router-link></li>
      <li><router-link class="link" :to="{ name: 'test'}">Activities</router-link></li>
      <li><router-link class="link" :to="{ name: 'admin'}">Profile</router-link></li>
      <li><a class="link" @click="toggleForm('register')">Register</a></li>
      <li><a class="link" @click="toggleForm('login')">Login</a></li>
    </ul>

  </nav>
      <!-- Login Form -->
      <div v-if="showForm === 'login'" class="form-container login-form" >
        <div class="form-box">
          <button class="close-btn"  @click="closeForm"><img src="../img/Icon.png" height="20" width="20"/></button>

          <div class="wrapper">

          <h2>Login Form</h2>

          <div class="button-container">
            <!--                    <button class="toggle-btn login-btn active" onclick="showLoginForm()">Login</button>-->
            <!--                    <button class="toggle-btn signup-btn" onclick="showSignupForm()">Sign up</button>-->
            <label class="slide singup"><a class="link  " @click="toggleForm('register')">Register</a></label>
            <label class="slide login"><a class="link  " @click="toggleForm('login')">Login</a></label>

          </div>
          <form @submit.prevent="submitLogin">
            <input type="email" id="login-email" v-model="loginForm.email" placeholder="Email" required />
            <input type="password" id="login-password" v-model="loginForm.password" placeholder="Password" required />
            <button  class="register-btn" type="submit">Login</button>
          </form>

         </div>
        </div>
      </div>

      <!-- Register Form -->
      <div v-if="showForm === 'register'" class="form-container singUp-form" >


                <div class="form-box">


                    <button class="close-btn"  @click="closeForm"><img src="../img/Icon.png" height="20" width="20"/></button>
                  <div class="wrapper">
                    <h2>Register Form</h2>

                  <div class="button-container">
                    <!--                    <button class="toggle-btn login-btn active" onclick="showLoginForm()">Login</button>-->
                    <!--                    <button class="toggle-btn signup-btn" onclick="showSignupForm()">Sign up</button>-->
                    <label class="slide singup"><a class="link  " @click="toggleForm('register')">Register</a></label>
                    <label class="slide login"><a class="link  " @click="toggleForm('login')">Login</a></label>

                  </div>


                  <form @submit.prevent="submitRegister">

                    <input type="text" id="register-username" v-model="registerForm.username" required placeholder="User name"  />

                    <input type="email" id="register-email" v-model="registerForm.email" required  placeholder="Email Address" />

                    <input type="password" id="register-password" v-model="registerForm.password" required  placeholder="Password" />

                    <input type="password" id="register-passwordConfirm" v-model="registerForm.passwordConfirm" required  placeholder="Confirm Password" />
                    <button class="register-btn" type="submit">Register</button>
                  </form>
                  </div>
                </div>
              </div>





  </body>




</template>

<script>


import { FontAwesomeIcon as Fa } from "@fortawesome/vue-fontawesome";

export default {
  name: "Header",
  components: { Fa },
  data() {
    return {
      showForm: null, // Tracks whether login or register form is visible
      loginForm: {
        email: "",
        password: "",
      },
      registerForm: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    toggleForm(formType) {
      this.showForm = formType; // Show login or register form
    },
    closeForm() {
      this.showForm = null; // Hide forms
    },
    submitLogin() {
      console.log("Login Form Submitted", this.loginForm);
      this.closeForm();
    },
    submitRegister() {
      console.log("Register Form Submitted", this.registerForm);
      this.closeForm();
    },
  },

};


</script>

<style >


body {
  font-family: Arial, sans-serif;
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;

}



nav {

  background: #ffffff;
  height: 35px;
  width: 100%;
}

.logo {
  float: left;
  color: black;
  font-size: 35px;
  line-height: 80px;
  padding-left: 20px;
  padding-right: 100px;
  font-weight: bold;
}

nav ul {
  float: right;
  margin-right: 20px;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}

nav ul li a {
  color: black;
  font-size: 25px;
  padding: 7px 10px;
  border-radius: 3px;
  text-transform: uppercase;

}

ul.navigation a.active,
ul.navigation a:hover {
  color: white;
  background: #9851c3;
  transition: 0.5s;
}


.checkbtn {
  font-size: 30px;
  color: black;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}


@media (max-width: 1130px) {
  label.logo{
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a{
    font-size: 16px;
  }
}

@media(max-width: 900px){
  .checkbtn {
    display: block;

  }
  ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #d9d9d9;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
    z-index: 1;
  }

  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }

  nav ul li a {
    font-size: 20px;
  }
  a:hover, a.active{
    background: none;
    color: white;
  }
  #check:checked ~ ul{
    left: 0;
  }

}
/* Form Container */
.form-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Form Box */
.form-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
 text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

}

.form-box h2 {
  margin-bottom: 20px;
  font-size: 2rem;
}

.form-box form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-box input {
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 5px 5px lightgrey;

}
input:focus {
   border-color: #ac53d1;/* Change to your desired color */
  outline: none; /* Optional: Removes the default outline */
}

.form-box .register-btn{
  padding: 15px;
  background: linear-gradient(-45deg, #ab39cf, #3ec861);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.4rem;
  margin: 30px 0 0 0;

}.form-box .register-btn:hover {
  transition: 5s;
   background: linear-gradient(-45deg, #9818ca, #17c647); /* Change gradient direction */
 }

.form-box button:hover {
  background-color: #45a049;
}

.close-btn {
  background: none !important; /* No background */
  border: none; /* No border */
  font-size: 15px;
  margin-left: 270px ;
  margin-top: 10px;
  color: #333;
  padding: 0;

}

.form-box .button-container{
  position: relative;
  display: flex ;
  height: 50px;
  width: 100%;
  overflow: hidden;
  margin: 30px 0 25px 0;
  border-radius: 10px;
  border: 1px solid lightgrey;
  justify-content: space-between;

}
.button-container .slide{
  height: 100%;
  width: auto;
  z-index: 1 !important;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-align: center !important;
  line-height: 48px;
  cursor: pointer;
  padding: 0 55px 0 55px;

  /*
  padding-right: 50px;
  padding-left: 50px;
  */

}
.button-container .singup{
  color: #000;

}
.button-container .slide-tab{
position: absolute;
  height: 100%;
  width: 50%;
  left: 0;
  z-index: 0;
  border-radius: 5px;
  background:linear-gradient(-45deg, #ab39cf, #3ec861) ;
}
button-container a{
  background-color: #fff;
}
.singUp-form .singup{
  background:linear-gradient(-45deg, #ab39cf, #3ec861) ;

}
.singUp-form .singup a{
  color: #fff;
}
.login-form .login{

  background:linear-gradient(-45deg, #ab39cf, #3ec861) ;
}
.login-form .login a{
  color: #fff;
}
.form-box .wrapper{
  margin: 20px ;
}
 /* css for new form  */



</style>


