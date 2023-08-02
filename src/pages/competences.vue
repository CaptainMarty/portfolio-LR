<template>
    <body>
        <section class="section-1">
            <img src="../images/stars.png" id="stars">
            <img src="../images/moon.png" id="moon">
            <h2 class="text-center" id="text">APTITUDES<br>
                <span>Système Solaire<br>de Compétences</span>
            </h2>
            <button @click="scrollToSection" id="btn">Explorer</button>
            <img src="../images/mountain_front_left.png" id="mountain_front">
            <img src="../images/aptitude.png" id="moon_landing">
        </section>

        <div class="container sec2">
            <div class="row">
                <h2 class="titre-competence text-center" id="section">Les planètes compétences</h2>
                <p class="text-center">Fort d'une expérience autodidacte de plus de 10 ans, j'ai acquis un vaste éventail de
                    compétences en tant
                    que community manager et streamer. Ces compétences forment un système solaire, chacune représentant un
                    niveau d'expertise exprimé en pourcentage.<br>
                    Que ce soit la création de stratégies captivantes, la gestion
                    des médias sociaux ou encore la création de communautés florissantes, je suis prêt à explorer les
                    confins de l'univers numérique pour offrir une présence en ligne exceptionnelle à mes clients. Guidé par
                    ma passion et ma détermination, je suis prêt à guider ma communauté vers de nouveaux horizons
                    numériques.
                </p>
            </div>
            <div class="row bloc-planet d-flex">
                <div class="zoom-img text-center col-lg-2 col-12">
                    <div class="image-container">
                        <img src="../images/planet-1.png" alt="" height="200" width="200">
                        <p>Adobe</p>
                        <div class="overlay-text">
                            <p>Habitable à <span class="pourcent">85%</span></p>
                        </div>
                    </div>
                </div>
                <div class="zoom-img text-center col-lg-2 col-12">
                    <div class="image-container">
                        <img src="../images/planet-2.png" alt="" height="200" width="200">
                        <p>Réseaux sociaux</p>
                        <div class="overlay-text">
                            <p>Habitable à <span class="pourcent">70%</span></p>
                        </div>
                    </div>
                </div>
                <div class="zoom-img text-center col-lg-2 col-md-12">
                    <div class="image-container">
                        <img src="../images/planet-3.png" alt="" height="200" width="200">
                        <p>Communication</p>
                        <div class="overlay-text">
                            <p>Habitable à <span class="pourcent">75%</span></p>
                        </div>
                    </div>
                </div>
                <div class="zoom-img text-center col-lg-2 col-md-12">
                    <div class="image-container">
                        <img src="../images/planet-4.png" alt="" height="200" width="200">
                        <p>Montage Vidéo</p>
                        <div class="overlay-text">
                            <p>Habitable à <span class="pourcent">100%</span></p>
                        </div>
                    </div>
                </div>
                <div class="zoom-img text-center col-lg-2 col-md-12">
                    <div class="image-container">
                        <img src="../images/planet-5.png" alt="" height="200" width="200">
                        <p>Graphisme</p>
                        <div class="overlay-text">
                            <p>Habitable à <span class="pourcent">90%</span></p>
                        </div>
                    </div>
                </div>
                <div class="zoom-img text-center col-lg-2 col-md-12">
                    <div class="image-container">
                        <img src="../images/planet-6.png" alt="" height="200" width="200">
                        <p>Anglais</p>
                        <div class="overlay-text">
                            <p>Habitable à <span class="pourcent">60%</span></p>
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
    }
}
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
    background: linear-gradient(to top, #4F5399, transparent);
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

.sec {
    position: relative;
    padding: 100px;
    background: #7597de;
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.sec2 p {
    font-size: 1.5em;
    color: white;
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

.titre-competence {
    font-size: 4.5em;
    margin-bottom: 10px;
    color: white;
    padding-top: 50px;
}

.bloc-planet {
    margin: 50px 0 175px 0;
    padding: 50px;
}

.zoom-img img,
.sec3 img {
    transition: transform 0.3s ease, filter 0.3s ease;
}

/* Ajouter l'effet de zoom sur hover */
.zoom-img img:hover,
.sec3 img:hover {
    transform: scale(1.2);
    filter: blur(3px);
}

.pourcent {
    font-weight: bold;
    color: blue;
    text-shadow: 2px 2px 4px white;
}

.overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 15px;
    padding: 5px;
    border-radius: 5px;
    display: none;
    background-color: rgb(90, 102, 173, 0.5);
    /* Masquer le texte par défaut */
}

.image-container:hover .overlay-text {
    display: block;
}
</style>
  