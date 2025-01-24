<script setup>

</script>

<template>
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, width=device-width">

    <link rel="stylesheet"  href="./index.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />



  </head>
  <body>

  <div class="organism-log-in-form">
    <div class="molecules-log-in-form">
      <div class="molecules-log-in-form-child">
      </div>
      <b class="sign-up-form">  Login Form</b>
      <div class="login-button">
        <div class="login-button-child">
        </div>
        <div class="login">Login</div>
      </div>
      <div class="signup-button">
        <div class="signup-button-child">
        </div>
        <div class="signup">Sign up</div>
      </div>
      <div class="checkboxes">
      </div>
      <div class="forgot-password">Forgot password?</div>
      <div class="not-a-member-container">
        <span>Not a member? </span>
        <span class="signup-now">Signup now</span>
      </div>
      <div class="inputtext-field">
        <div class="inputtext-field-child">
        </div>
        <div class="enter-your-name">Password</div>
      </div>
      <div class="inputtext-field1">
        <div class="inputtext-field-child">
        </div>
        <div class="enter-your-name">Email Address</div>
      </div>
      <div class="submit-button">
        <div class="submit-button-child">
        </div>
        <div class="login1">Login</div>
      </div>
      <img class="close-icon" alt="" src="close.svg">

    </div>
  </div>




  </body>
  </html>
</template>

<style>
.molecules-log-in-form-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
}
.sign-up-form {
  position: absolute;
  height: 9.17%;
  width: 52.02%;
  top: 9.5%;
  left: 23.99%;
  font-size: 40px;
  display: inline-block;
  white-space: pre-wrap;
}
.login-button-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  background-color: #000;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}
.login {
  position: absolute;
  height: 52%;
  width: 39.5%;
  top: 24%;
  left: 38%;
  font-weight: 600;
  display: inline-block;
}
.login-button {
  position: absolute;
  height: 8.33%;
  width: 40.32%;
  top: 22.83%;
  right: 49.6%;
  bottom: 68.83%;
  left: 10.08%;
  color: #fff;
}
.signup-button-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  background: linear-gradient(111.45deg, #fff 90.5%);
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}
.signup {
  position: absolute;
  height: 50%;
  width: 38%;
  top: 26%;
  left: 31%;
  font-weight: 600;
  display: inline-block;
}
.signup-button {
  position: absolute;
  height: 8.33%;
  width: 40.32%;
  top: 22.83%;
  right: 9.68%;
  bottom: 68.83%;
  left: 50%;
  backdrop-filter: blur(4px);
  border-radius: 8px;
}
.checkboxes {
  position: absolute;
  height: 3.67%;
  width: 34.27%;
  top: 67%;
  right: 55.65%;
  bottom: 29.33%;
  left: 10.08%;
}
.forgot-password {
  position: absolute;
  height: 3.67%;
  width: 30.44%;
  top: 64%;
  left: 10.89%;
  font-size: 16px;
  display: inline-block;
}
.signup-now {
  color: #000;
}
.not-a-member-container {
  position: absolute;
  height: 3.67%;
  width: 42.54%;
  top: 86.17%;
  left: 30.24%;
  font-size: 16px;
  display: inline-block;
  color: rgba(0, 0, 0, 0.7);
}
.inputtext-field-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #fff;
}
.enter-your-name {
  position: absolute;
  height: 36%;
  width: 85%;
  top: 32%;
  left: 5.67%;
  display: inline-block;
}
.inputtext-field {
  position: absolute;
  height: 8.67%;
  width: 81.05%;
  top: 51.33%;
  right: 9.07%;
  bottom: 40%;
  left: 9.88%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.75);
}
.inputtext-field1 {
  position: absolute;
  height: 8.67%;
  width: 81.05%;
  top: 38.83%;
  right: 9.07%;
  bottom: 52.5%;
  left: 9.88%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.75);
}
.submit-button-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: #fff;
}
.login1 {
  position: absolute;
  height: 48%;
  width: 14.75%;
  top: 26%;
  left: 42.5%;
  font-weight: 600;
  display: inline-block;
}
.submit-button {
  position: absolute;
  height: 8.67%;
  width: 81.05%;
  top: 70.5%;
  right: 9.07%;
  bottom: 20.83%;
  left: 9.88%;
  border-radius: 20px;
  border: 1px solid #000;
  box-sizing: border-box;
}
.close-icon {
  position: absolute;
  height: 8.67%;
  width: 10.48%;
  top: 0%;
  right: 0%;
  bottom: 91.33%;
  left: 89.52%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.molecules-log-in-form {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 20px;
}
.organism-log-in-form {
  width: 100%;
  position: relative;
  height: 600px;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
}


</style>
