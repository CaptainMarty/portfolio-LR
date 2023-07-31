<template>
    <body>
        <section class="section-1">
            <img src="../images/stars.png" id="stars">
            <img src="../images/moon (1).png" id="moon">
            <h2 id="text">APTITUDES<br>
                <span>Constellations de Compétences</span>
            </h2>
            <img src="../images/mountain_front_left.png" id="mountain_front">
            <img src="../images/moon_landing.png" id="moon_landing">
        </section>

        <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8 col-sm-12 sec" id="section">
                        <h2>BONJOUR !</h2>
                        <p>Embarquez pour un voyage intersidéral au cœur de mon univers d'exploration créative en tant que
                            Community Manager et créateur de contenus dédié au monde graphique. Laissez-moi vous présenter
                            un panorama étourdissant des réalisations que j'ai forgées pour propulser le développement et
                            l'attractivité de votre image. Telle une étoile filante, je m'engage à concevoir des contenus
                            envoûtants et percutants, capables de capturer l'essence même de votre marque et de susciter
                            l'engouement de votre communauté cosmique.
                        </p>
                    </div>
                    <div class="col-lg-4 col-sm-12 sec">
                        <img src="../images/V2.png" alt="" height="300" width="300">
                    </div>
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
    background: linear-gradient(to top, #7597de, transparent);
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
</style>
