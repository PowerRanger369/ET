<template>
  <div class="header">
    <Header />
  </div>

  <div class="content">

  </div>


  <div class="footer">
    <Footer />
  </div>
</template>


<script >
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";



export default {
  name: 'article',
  components: {


    Header,

    Footer,

  },
}
</script>


<style >
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