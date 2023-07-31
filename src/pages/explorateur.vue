<template>
    <body>
        <section class="section-1">
            <img src="../images/stars.png" id="stars">
            <img src="../images/moon (1).png" id="moon">
            <h2 id="text">EXPLORATEUR<br>
                <span>Qui suis-je ?</span>
            </h2>
            <img src="../images/mountain_front_left.png" id="mountain_front">
            <img src="../images/moon_landing.png" id="moon_landing">
        </section>

        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-8 col-sm-12 sec1">
                    <h2>Community Manager <br>Créateur de Contenus</h2>
                    <p>Plongez dans l'aventure captivante d'un autodidacte passionn&eacute; de community management et de
                        cr&eacute;ation de contenus. J'ai acquis une pr&eacute;cieuse exp&eacute;rience lors
                        de stages chez <a href="https://vosgesfm.fr/" target="_blank">VosgesFM</a>, une radio locale, et
                        chez <a href="https://thepioneersgame.com/fr" target="_blank">SuperCube</a>, une
                        soci&eacute;t&eacute; de jeu
                        vid&eacute;o et j'ai d&eacute;couvert ma v&eacute;ritable passion en rejoignant la plateforme Twitch
                        en 2015. </p>
                    <p>
                        En tant que mod&eacute;rateur des cha&icirc;nes de renomm&eacute;e telles que
                        &quot; <a href="https://www.twitch.tv/djboucherie" target="_blank">Djboucherie</a> &quot; et
                        &quot;<a href="https://www.twitch.tv/dealoc" target="_blank">DealoC</a>&quot;, j'ai apport&eacute;
                        ma contribution
                        &agrave; la
                        communaut&eacute;, tout en d&eacute;veloppant mes comp&eacute;tences en gestion et en animation de
                        contenu.</p>

                    <p>Fort d'une exp&eacute;rience de cr&eacute;ation de contenu sur Twitch depuis un an, j'ai créer ma
                        propre chaîne
                        de streaming de jeux de simulation tels que Euro Truck Simulator 2 et
                        Snowrunner <a href="https://www.twitch.tv/cptmarty_" target="_blank">(ici)</a>. Au-del&agrave; des
                        jeux, je partage &eacute;galement ma passion pour le cin&eacute;ma et
                        j'ai m&ecirc;me cr&eacute;&eacute; un compte TikTok d&eacute;di&eacute; &agrave; cet art fascinant
                        <a href="https://www.tiktok.com/@cptmarty" target="_blank">(ici)</a>.
                    </p>

                    <p>En qu&ecirc;te de nouvelles connaissances et soucieux de me perfectionner, j'ai entrepris une
                        formation de d&eacute;veloppeur web de 10 mois en 2023. Gr&acirc;ce &agrave; cette
                        exp&eacute;rience, j'ai acquis les connaissances essentielles pour concevoir des sites web, dont
                        celui que vous parcourez actuellement, enti&egrave;rement r&eacute;alis&eacute; par mes soins.
                    </p>
                    <p>
                        Prenez donc le temps d'explorer le fruit de mon travail, fruit de ma passion pour la gestion de
                        communaut&eacute; et la cr&eacute;ation de contenu.</p>
                </div>
                <div class="col-lg-4 col-sm-12 sec1">
                    <img src="../images/Logo_LRcm.png" alt="" height="300" width="300">
                    <img src="../images/V2.png" alt="" height="300" width="300">
                    <div class="image-container sec3">
                        <a href="https://www.twitch.tv/cptmarty_" target="_blank">
                            <img src="../images/twitch.png" alt="" height="300" width="300">
                            <div class="overlay-text">Twitch</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid sec2">
            <div class="row">
                <h2>M'ont fait confiance</h2>
                <div class="text-center col-2"></div>
                <div class="zoom-img text-center col-2">
                    <a href="https://www.twitch.tv/djboucherie" target="_blank">
                        <div class="image-container">
                            <img src="../images/djboucherie.png" alt="" height="150" width="150">
                            <div class="overlay-text">DjBoucherie</div>
                        </div>
                    </a>
                </div>
                <div class="zoom-img text-center col-2">
                    <a href="https://www.twitch.tv/dealoc" target="_blank">
                        <div class="image-container">
                            <img src="../images/dealoc.png" alt="" height="150" width="150">
                            <div class="overlay-text">DealoC</div>
                        </div>
                    </a>
                </div>
                <div class="zoom-img text-center col-2">
                    <a href="https://vosgesfm.fr/" target="_blank">
                        <div class="image-container">
                            <img src="../images/vosgesfm.png" alt="" height="150" width="150">
                            <div class="overlay-text">VosgesFM</div>
                        </div>
                    </a>
                </div>
                <div class="zoom-img text-center col-2">
                    <a href="https://thepioneersgame.com/fr" target="_blank">
                        <div class="image-container">
                            <img src="../images/supercube.jpg" alt="" height="150" width="150">
                            <div class="overlay-text">SuperCube</div>
                        </div>
                    </a>
                </div>
                <div class="text-center col-2"></div>
            </div>
        </div>



    </body>
</template>

<script>

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

.sec1 {
    position: relative;
    padding: 100px;
    background: #1c0522;
}

.sec1 h2 {
    font-size: 4.5em;
    margin-bottom: 10px;
    color: white;
}

.sec1 p {
    font-size: 1.5em;
    color: white;
}

.sec1 img {
    border-radius: 50px;
    padding: 20px;
}

.sec1 a {
    color: #7597de !important;
}

.sec1 a:hover {
    color: #425b91 !important;
}

.sec2 {
    position: relative;
    padding: 100px;
    background: #7597de;
}

.sec2 h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: white;
}

.sec2 p {
    font-size: 1.5em;
    color: white;
}

/* Style pour les images zoomées */
.zoom-img img, .sec3 img {
    transition: transform 0.3s ease, filter 0.3s ease;
}

/* Ajouter l'effet de zoom sur hover */
.zoom-img img:hover, .sec3 img:hover {
    transform: scale(1.2);
    filter: blur(5px);
}

.overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 22px;
    padding: 10px;
    border-radius: 5px;
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    /* Masquer le texte par défaut */
}

/* Afficher le texte sur hover */
.image-container:hover .overlay-text {
    display: block;
}
</style>
