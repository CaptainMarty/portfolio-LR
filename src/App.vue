<template>
  <HeaderComponent/>
    <div class="content">
      <RouterView/>
    </div>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from "./components/header.vue"
import FooterComponent from "./components/footer.vue"
import IndexPage from "./pages/index.vue"


export default {
  components: {HeaderComponent, FooterComponent, IndexPage},
  data() {
    return {
      title:"Mon application"
    }
  }
}
</script>

<style lang="scss">
$dark: #2A2A2A;
$purple: #23184D;

@import "../node_modules/bootstrap/scss/bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Strait&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Strait', sans-serif;
  position: relative;
}
</style>
