

<template>


  <div class="header">
    <Header />
  </div>

   <div class="content">
     <MainHome />
   </div>


<div class="footer">
  <Footer />
</div>


</template>

<script>
import Header from '@/components/Header.vue';
import MainHome from "@/components/MainHome.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Header,
    MainHome,
    Footer,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;


}

.content{
  margin: 50px 0 0 0;
}
</style>