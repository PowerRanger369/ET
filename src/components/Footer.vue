
<template>


  <footer class="footer">
    <div class="footer-section">
      <h2>Join</h2>
      <p>
        Join us in creating a greener world—log in or sign up to start tracking your environmental impact today.
      </p>
    </div>
    <div class="footer-section">
      <h2>About</h2>
      <p>
        We help you make informed choices to protect the environment and build a sustainable future through our easy-to-use tracking tools.
      </p>
    </div>
    <div class="footer-section">
      <h2>Contact</h2>


      <div class="icons">
      <i class="fas fa-youtube"><fa :icon="['fab','youtube']"/></i>
      <i class="fas fa-youtube"><fa :icon="['fab','facebook']"/></i>
      <i class="fas fa-youtube"><fa :icon="['fab','instagram']"/></i>
      <i class="fas fa-youtube"><fa :icon="['fab','github']"/></i>
      </div>

      <button class="Admin">Admin</button>
    </div>

  </footer>

</template>

<script>
import {FontAwesomeIcon as Fa} from "@fortawesome/vue-fontawesome";
export default {
  components: {Fa},
  name: 'Footer',
};
</script>

<style >
.footer {
  background-color: #2f4f4f;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  font-family: Arial, sans-serif;
}

.footer-section {
  flex: 1;
  margin: 0 20px;
}

.footer-section h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: white;
}

.footer-section p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  color: #d3d3d3;
}

.contact .social-icons {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.contact .social-icons i {
  font-size: 1.5rem;
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.contact .social-icons i:hover {
  color: #00ff7f;
}

.contact p {
  margin-top: 10px;
  font-size: 1rem;
  color: #d3d3d3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    margin: 20px 0;
  }
}
.icons i{
  font-size: 1.8rem;
  margin: 10px;
}
 .footer-section button {
   text-decoration: none;
   margin: 20px;
   font-size: 1rem;
   padding: 0;
   border: none;
   background: none;
   color: white;
 }
</style>