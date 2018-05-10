<template>
<div>
  <Navbar/>
  <nuxt/>
  <Footer/>
</div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
input {
  max-width: 145px;
}
body {
  margin-bottom: 100px;
  /* Margin bottom by footer height */
}
html {
  position: relative;
  min-height: 100%;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 20px;
  /* Set the fixed height of the footer here */
  /* line-height: 20px; /* Vertically center the text there */
  /* background-color: #f5f5f5; */
}
</style>
