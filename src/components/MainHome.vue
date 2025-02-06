
<template>
  <!-- HTML -->
  <section class="impact-section">
    <div class="content-container">
      <div class="text-content">
        <h1>Track Your <br> Environmental Impact</h1>
        <p>Calculate CO2 emissions and recycle plastic effectively with our innovative tracking tools.</p>
        <div class="action-buttons">

          <div class="rating">
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <p>Rated by users</p>
          </div>
        </div>
      </div>
      <div class="image-content">

<!--        <img src="../img/Firefly post apocalyptic word city covered with forest 2828.jpg" height="477" width="598" alt="Environmental Impact Image"/><img/>-->


        <img src="../img/waterfall-5312692_1920.jpg" height="477" width="598"/></div>
    </div>

  </section>
  <section class="services-section">
    <h1 class="ser-Head"> Environmental Impact Services</h1>
    <p class="ser-text">Calculate your car's CO2 emissions and learn how to recycle plastic effectively for a greener future.</p>
    <div class="box-section">
    <div class="ser-textbox">
      <img src="../img/earth-5240543_1280.jpg" height="853" width="1280"/>
      <h4>CO2 Emission Tracker</h4>
      <p>Easily calculate your vehicle's carbon footprint and discover ways to reduce your environmental impact.</p>
    </div>
      <div class="ser-textbox">
        <img src="../img/bird-7530845_1280.jpg" height="854" width="1280"/>
        <h4>Sustainable Living Tips</h4>
        <p>Join our community to share tips and strategies for sustainable living and reducing carbon footprints.</p>
      </div>
    <div class="ser-textbox">
      <img src="../img/beach-5697987_1280.jpg" height="180" width="270"/>
      <h4>Plastic Recycling Guide</h4>
      <p>Find out how to recycle plastic properly and contribute to reducing waste in our environment</p>
    </div>

    </div>

  </section>
  <section class="projects-section">
    <h2>Eco Projects</h2>
    <p>Explore initiatives to reduce CO2 emissions and recycle plastics. </p>
    <div class="box-projects">
      <h4>Carbon Footprint</h4>

    <div class="eco-img">

      <img src="../img/DSC04692-Edit.jpg" height="3891" width="5836"/>

      <img src="../img/steering-wheel-7806891_1280.jpg" height="853" width="1280"/>

    </div>
      <div class="txt-butt-box">
        <p>
          Track your vehicle's emissions and improve sustainability efforts </p>
        <button class="learn-btn btn1">Learn</button>
      </div>

      <h4>Plastic Recycling</h4>
      <div class="eco-img">

        <img src="../img/waterfall-6619377_1280.jpg" height="200" width="350"/>

        <img src="../img/namibia-2049203_1280.jpg" height="200" width="350"/>

      </div>


      <div class="txt-butt-box">
        <p>Discover effective ways to recycle plastic and reduce waste </p>
        <button class="Join-btn">Join</button>
      </div>

    </div>

  </section>

</template>


<script>
export default {
  name: 'MainHome',
};
</script>

<style>
/*
.impact-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #34c759, #8e44ad);
  padding: 50px;
  color: white;
}
*/

 /* animated */
.impact-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: white;
  background: linear-gradient(-95deg, #34c759, #900dc6); /* Initial gradient */
  background-size: 400% 400%;
  animation: gradient 15s  ease infinite; /* Apply animation */
  height: auto;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.content-container {
  display: flex;
  flex-wrap: wrap; /* Ensures wrapping on smaller screens */
  max-width: 1920px;
  width: 100%;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.text-content {
  flex: 1;
  text-align: left;
}

.text-content h1 {
  font-size: 5rem;
  line-height: 1.2;
  margin-bottom: 40px;
}

.text-content p {
  font-size: 2rem;
  margin-bottom: 30px;
}

.action-buttons {
  display: flex;
  flex-wrap: wrap; /* Wrap buttons and rating on smaller screens */
  align-items: center;
  gap: 20px;
}

.start-btn {
  padding: 10px 80px;
  font-size: 25px;
  color: white;
  background-color: inherit;
  border: solid 2px white;
  border-radius: 20px;
  cursor: pointer;
}

.start-btn:hover {
  background-color: #9851c3;
  transition-duration: 0.2s;
}

.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  margin-left: 50px;
}
.rating p {
  font-size: 15px;
}

.rating span {
  color: white;
  font-size: 1.8rem;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(25% 0%, 80% 0%, 75% 100%, 20% 100%); /* Always keep this shape */
  overflow: hidden; /* Ensures the clipped image doesn't spill out */
}

.image-content img {
  max-width: 100%;
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px;
  transform: scale(1.2); /* Ensures the image fills the clipped area */
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .content-container {
    flex-direction: column; /* Stack content vertically */
  }

  .text-content h1 {
    font-size: 3rem;
    text-align: center;
  }

  .text-content p {
    font-size: 1rem;
    text-align: center;
  }

  .action-buttons {
    justify-content: center;
  }

  .image-content {
    clip-path: polygon(25% 0%, 90% 0%, 75% 100%, 10% 100%); /* Retain shape */
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .text-content h1 {
    font-size: 2.5rem;
  }

  .start-btn {
    padding: 8px 50px;
    font-size: 18px;
  }

  .rating span {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .text-content h1 {
    font-size: 2rem;
  }

  .text-content p {
    font-size: 0.9rem;
  }

  .start-btn {
    padding: 6px 40px;
    font-size: 16px;
  }

  .rating span {
    font-size: 1.1rem;
  }
}


.services-section{
  display: block;
}
.box-section{
  display: flex;
}
.ser-Head{
  padding-top: 40px;
  font-size: 2.5rem;
}
.ser-text{
  padding-top: 20px;
}
.ser-textbox{
  padding-top: 40px;


}
.ser-textbox img{
  border-radius: 20px;

}
.ser-textbox h4{
  padding:20px 0;
}
@media(max-width: 858px) {

}

/* project section*/
.projects-section {
  display: block;
  background-color: #a8e6cf;
  padding: 40px 20px;
  text-align: center;
  height: auto;
}

.projects-section h2 {
  font-size: 2.5rem;
  color: #2f4f4f;
  margin-bottom: 10px;
}

.projects-section p {
  font-size: 1.5rem;
  color: #606060;
  margin-bottom: 30px;
}

.box-projects {
  display: flex;
  flex-direction: column;
  gap: 40px; /* Adds space between projects */
  align-items: center;
}

.eco-project {
  width: 100%;
  max-width: 900px; /* Limits the width of each project */
}

.eco-img {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Wraps images on smaller screens */
  gap: 20px;
  margin-bottom: 20px;
}

.eco-img img {
  width: 100%;
  max-width: 650px; /* Ensures responsive width */
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin:0 90px;
}


.box-projects h4 {
  font-size: 1.8rem;
  margin: 10px 0;
  color: #2f4f4f;
}

.txt-butt-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.txt-butt-box p {
  font-size: 1.3rem;
  color: #606060;
  margin-bottom: 15px;
  max-width: 700px;
}

.learn-btn,
.Join-btn {
  padding: 10px 80px;
  font-size: 1rem;
  color: black;
  background-color: #a8e6cf;
  border: solid 1px black;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.learn-btn:hover,
.Join-btn:hover {
  background-color: #34c759;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .projects-section h2 {
    font-size: 2rem;
  }

  .projects-section p {
    font-size: 1rem;
  }

  .eco-img {
    flex-direction: column; /* Stacks images vertically */
    align-items: center;
  }

  .eco-img img {
    max-width: 90%; /* Ensures images fit smaller screens */
    margin: 0;
  }

  .txt-butt-box p {
    font-size: 0.9rem;
  }

  .learn-btn,
  .Join-btn {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .projects-section h2 {
    font-size: 1.8rem;
  }

  .projects-section p {
    font-size: 0.9rem;
  }

  .learn-btn,
  .Join-btn {
    padding: 8px 30px;
  }
}

/*responsivnes  */
@media (max-width: 768px) {
  .ser-Head {
    font-size: 2rem;
  }

  .ser-text {
    font-size: 1rem;
  }

  .ser-textbox {
    width: 90%; /* Full width for smaller screens */
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .ser-Head {
    font-size: 1.8rem;
  }

  .ser-text {
    font-size: 0.9rem;
  }

  .ser-textbox h4 {
    font-size: 1.3rem;
  }

  .ser-textbox p {
    font-size: 0.9rem;
  }
}
.services-section {
  padding: 40px 20px 120px   20px;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
  text-align: center;
  height: auto;
}

.ser-Head {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2f4f4f;
}

.ser-text {
  font-size: 1.5rem;
  color: #606060;
  margin-bottom: 90px;
}

.box-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Enables wrapping for smaller screens */
  gap: 20px; /* Adds spacing between the cards */
}

.ser-textbox {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 500px; /* Fixed width for consistent card size */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
}

.ser-textbox:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.ser-textbox img {
  width: 100%; /* Responsive image scaling */
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.ser-textbox h4 {
  font-size: 1.5rem;
  color: #2f4f4f;
  margin-bottom: 10px;
}

.ser-textbox p {
  font-size: 1rem;
  color: #606060;
  line-height: 1.5;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .ser-Head {
    font-size: 2rem;
  }

  .ser-text {
    font-size: 1rem;
  }

  .ser-textbox {
    width: 90%; /* Full width for smaller screens */
    margin: 0 auto;
  }
}
</style>

