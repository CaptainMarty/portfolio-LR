<template>
    <body>
      <div>
        <section class="section-1 d-flex justify-content-center align-items-center">
          <img src="../images/stars.png" id="stars">
          <img src="../images/moon.png" id="moon">
          <h2 id="text">PORTFOLIO<br>
            <span>Lavoisier Romain</span>
          </h2>
          <button @click="scrollToSection" id="btn">Explorer</button>
          <img src="../images/mountain_front_left.png" id="mountain_front">
          <img src="../images/moon_landing.png" id="moon_landing">
        </section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8 col-md-12 sec text-center" id="section">
              <h2>BONJOUR</h2>
              <p>Embarquez pour un voyage intersidéral au cœur de mon univers d'exploration créative en tant que
                Community Manager et créateur de contenus dédié au monde graphique. Laissez-moi vous présenter
                un panorama étourdissant des réalisations que j'ai forgées pour propulser le développement et
                l'attractivité de votre image. Telle une étoile filante, je m'engage à concevoir des contenus
                envoûtants et percutants, capables de capturer l'essence même de votre marque et de susciter
                l'engouement de votre communauté cosmique.
              </p>
            </div>
            <div class="col-lg-4 col-md-12 sec">
              <img src="../images/web-dev-300x300.png" alt="" height="300" width="300">
            </div>
          </div>
        </div>
        <div class="container description">
          <div class="row">
            <div class="col-12">
              <h2>MISSIONS</h2>
              <div class="row">
                <div class="col-align col-md-6">
                  <img src="../images/conquerir-300x300.png" alt="">
                </div>
                <div class="text-align col-md-6 text-md-start text-center">
                  <p>
                    <span>Conquérir</span> <br>
                    En tant que community manager et créateur de contenus, mon
                    objectif est de conquérir votre demande, d'explorer vos besoins et de vous livrer des
                    solutions sur mesure. Mon vaisseau est équipé des dernières technologies en matière de
                    stratégie digitale, de gestion de communauté et de création de contenus captivants. Je
                    suis
                    le pilote expérimenté qui saura vous guider à travers les méandres de l'univers en
                    ligne.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="text-align text-md-end col-md-6 text-md-start text-center">
                  <p>
                    <span>Diffuser</span> <br>
                    Je déploie mes talents de
                    créateur de contenus sur Twitch, YouTube et TikTok. Plongez dans l'univers du cinéma, de
                    l'astronomie et des jeux vidéo, que j'explore avec passion et expertise.<br>
                    Grâce à mon expérience en tant que créateur de contenu, je suis prêt à vous guider dans
                    vos propres projets. Ensemble, nous repousserons les limites de l'exploration numérique
                    pour créer des récits captivants, des communautés engagées et des stratégies efficaces.
                  </p>
                </div>
                <div class="col-md-6 text-md-end text-center">
                  <img src="../images/streaming-300x300.png" alt="">
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <img src="../images/rapprochement-300x300.png" alt="">
                </div>
                <div class="text-align col-md-6 text-md-start text-center">
                  <p>
                    <span>Communiquer</span> <br>
                    Au cœur d'un univers infini de communication, j'explore les galaxies de contenu et je
                    pars à la conquête des étoiles du SEO pour propulser votre message vers de nouveaux
                    horizons. Fort de mon expérience en tant qu'animateur émérite dans les villages vacances, 
                    j'ai développé un savoir-faire exceptionnel pour créer des liens
                    solides et une confiance profonde avec mes clients. Grâce à ma connaissance en 
                    communication, je suis prêt à embarquer à bord de votre vaisseau pour
                    faire briller votre entreprise aux confins des univers digitaux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToSection() {
        const section = document.getElementById('section');
        section.scrollIntoView({ behavior: 'smooth' });
      },
    },
    mounted() {
      // Code de défilement à l'intérieur de la section "mounted"
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let mountain_front = document.getElementById('mountain_front');
        let moon_landing = document.getElementById('moon_landing');
  
        // Utilisation des directives Vue pour les attributs CSS
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value * 1.05 + 'px';
        mountain_front.style.left = value * -1 + 'px';
        moon_landing.style.left = value * 1 + 'px';
        text.style.marginTop = value * 1.5 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
      });
    },
  };
  </script>

<style scoped>
body {
    min-height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(#2b1055, #7597de);
}

section {
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.section-1::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 1000;
}

section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
}

section img#moon {
    mix-blend-mode: screen;
}

section img#mountain_front {
    z-index: 10;
}

#text {
    position: absolute;
    color: white;
    white-space: nowrap;
    font-size: 7.5vw;
    z-index: 9;
    top: 300px;
}

h2 span {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#btn {
    text-decoration: none;
    padding: 8px 30px;
    border-radius: 40px;
    background: white;
    color: #2b1055 !important;
    font-size: 1.5em;
    display: inline-block;
    z-index: 9;
    transform: translateY(100px);
    border: none;
}

.sec {
    position: relative;
    padding: 100px;
    background: #1c0522;
}

.sec h2 {
    font-size: 4.5em;
    margin-bottom: 10px;
    color: white;
}

.sec p {
    font-size: 1.5em;
    color: white;
}

.sec img {
    border-radius: 50px;
}

.description {
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 50px;
    background: rgba(167, 188, 232, 0.5);
    border-radius: 100px;
}

.description h2 {
    font-size: 4.5em;
    margin-bottom: 10px;
    color: white;
}

.text-align {
    margin-bottom: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 1.5em;
    color: white;
}

.text-align span {
    text-transform: uppercase;
    font-size: 1.5em;
    color: #2b1055;
}

.col-align {
    padding: 50px 0 50px 0;
}

.col-align img {
    align-items: center;
}</style>
