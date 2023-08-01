<template>
  <nav class="navbar navbar-expand-lg header-overlay" >
    <div class="container-fluid nav-font">
        <router-link to="/index" class="navbar-brand">
          <img src="../images/Logo_LRcm.png" alt="CubeRunner" height="150" width="150">
        </router-link>
      <button @click="collapse = !collapse" class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
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
  z-index: 9999; /* Assurez-vous que le z-index est supérieur aux autres éléments de votre site */
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
</style>