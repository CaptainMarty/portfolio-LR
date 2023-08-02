<template>
  <nav :class="{ 'mobile-menu-open': collapse }" class="navbar navbar-expand-lg header-overlay">
    <div class="container-fluid nav-font">
      <router-link to="/index" class="navbar-brand">
        <img src="../images/Logo_LRcm.png" alt="LRcm Logo" height="150" width="150">
      </router-link>
      <button @click="collapse = !collapse" class="navbar-toggler collapsed" type="button">
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div :class="{ collapse }" class="navbar-collapse">
        <div class="navbar-nav ms-auto text-uppercase ">
          <router-link to="/index"><span class="nav-link">Accueil</span></router-link>
          <router-link to="/explorateur"><span class="nav-link">Explorateur</span></router-link>
          <router-link to="/competences"><span class="nav-link">Aptitudes</span></router-link>
          <router-link to="/projets"><span class="nav-link">Missions Accomplies</span></router-link>
          <router-link to="/contact"><span class="nav-link">Transmission</span></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      collapse: true
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Strait&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Strait', sans-serif;
  position: relative;
  scroll-behavior: smooth scroll;
}
.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  /* Assurez-vous que le z-index est supérieur aux autres éléments de votre site */
  background-color: transparent;
}
.nav-link {
  color: white;
}
.nav-font a {
  font-family: Play, sans-serif;
  text-decoration: none;
  margin-left: 10px;
  padding-right: 5px;
}
a span {
  transition: transform .9s;
}
a:hover span {
  background: white;
  color: #2b1055;
  border-radius: 20px;
}
.router-link-active span {
  background: white;
  color: #2b1055;
  border-radius: 20px;
}
.navbar-toggler{
  border: 0;
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus{
  outline: none;
  box-shadow: none;
  border: 0;
}
.toggler-icon{
  width: 30px;
  height: 3px;
  background-color: red;
  display: block;
  transition: all 0.2s ;
}
.middle-bar{
  margin: 5px auto;
}
.navbar-toggler .top-bar{
  transform: rotate(45deg);
  transform-origin: 10% 10%;
}
.navbar-toggler .middle-bar{
  opacity: 0;
  filter: alpha(opacity=0);
}.navbar-toggler .bottom-bar{
  transform: rotate(-45deg);
  transform-origin: 10% 10%;
}
.navbar-toggler.collapsed .top-bar{
  transform: rotate(0);
}
.navbar-toggler.collapsed .middle-bar{
  opacity: 1;
  filter: alpha(opacity=100);
}
.navbar-toggler.collapsed .bottom-bar{
  transform: rotate(0);
}
.navbar-toggler.collapsed .toggler-icon{
  background-color: #ffffff;
}
@media (max-width: 767px) {
  .navbar-nav {
    background: rgb(43, 16, 85, 0.9);
    border-radius: 20px;
    padding: 5px;
    text-align: center;
  }
}
</style>
