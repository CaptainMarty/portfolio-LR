<template>
    <body>
        <section class="section-1">
            <img src="../images/stars.png" id="stars">
            <img src="../images/moon.png" id="moon">
            <h2 id="text">MISSIONS
                <span>Accomplies</span>
            </h2>
            <button @click="scrollToSection" id="btn">Explorer</button>
            <img src="../images/mountain_front_left.png" id="mountain_front">
            <img src="../images/moon_landing.png" id="moon_landing">
        </section>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12 sec text-center" id="section">
                    <h2>Mes Différents Projets</h2>
                </div>
            </div>
                    <div class="row bloc-projets d-flex">
                        <div class="text-center col-lg-4 col-12">
                            <div class="image-container">
                                <img src="../images/projet-1.png" class="image-background" alt="" height="350" width="350">
                            </div>
                        </div>
                        <div class="text-center col-lg-4 col-12">
                            <div class="image-container">
                                <img src="../images/projet-2.png" class="image-background" alt="" height="350" width="350">
                            </div>
                        </div>
                        <div class="text-center col-lg-4 col-12">
                            <div class="image-container">
                                <img src="../images/projet-3.png" class="image-background" alt="" height="350" width="350">
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

#text {
    text-align: center;
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
    padding: 75px;
    background: #1c0522;
}

.sec h2 {
    font-size: 4.5em;
    margin-bottom: 10px;
    color: white;
}
.bloc-projets{
    background: #1c0522;
}
.bloc-projets img {
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    margin: 25px 0 25px;
}
</style>
