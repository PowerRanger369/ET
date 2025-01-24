
<template>
<div class="header">
  <Header />
</div>

  <div class="content">
    <UserProfile />
  </div>


  <div class="footer">
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import UserProfile from "@/components/UserProfile.vue";

export default {
  name: 'profile',
  components: {

    Header,
    UserProfile,
    Footer,

  },
}
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