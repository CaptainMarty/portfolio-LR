<template>
    <div class="bg-color">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Contactez-nous !</h1>
                </div>
                <div class="row">
                    <div class="form-container col-4">
                        <form @submit.prevent="checkForm" action="https://vuejs.org/" method="post">
                            <label for="name">Votre Pseudo</label>
                            <input id="name" type="text" v-model="name" name="name" placeholder="Exemple : Exempledu78">
                            <p class="errors" v-if="nameError">{{ nameError }}</p>

                            <label for="email">Email</label>
                            <input id="email" type="email" v-model="email" name="email" placeholder="Exemple : exempledu78@blabla.com">
                            <p class="errors" v-if="emailError">{{ emailError }}</p>

                            <label for="object">Objet du message</label>
                            <select v-model="object" class="form-select" id="object">
                                <option value="" disabled>Votre choix ...</option>
                                <option value="1">Commentaires</option>
                                <option value="2">Questions</option>
                                <option value="3">Problèmes</option>
                            </select>
                            <p class="errors" v-if="objectError">{{ objectError }}</p>

                            <label for="message">Message</label>
                            <textarea id="message" name="message" v-model="message" cols="30" rows="5"
                                placeholder="Exemple : Bonjour, voici le message...">
                                    </textarea>
                            <p class="errors" v-if="messageError">{{ messageError }}</p>

                            <input id="validEmail" type="submit" value="Envoyer">
                            <p class="success-message" v-if="success">Message envoyé avec succès, Merci de votre contribution ! </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            object: '',
            message: '',
            nameError: '',
            emailError: '',
            objectError: '',
            messageError: '',
            success: false
        };
    },
    methods: {
        submitForm() {
            fetch('http://localhost/cube_runner_api/contact.php', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    object: this.object,
                    message: this.message
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
                this.success = true;

        },
        checkForm() {
            this.resetFormErrors()

            let thereIsAnError = false
            if (!this.name) {
                this.nameError = "Le nom est requis.";
                thereIsAnError = true
            };
            if (!this.email) {
                this.emailError = "L'email est requis.";
                thereIsAnError = true

            } else if (!this.validEmail(this.email)) {
                this.emailError = "Veuillez fournir une adresse email valide.";
                thereIsAnError = true

            };
            if (!this.object) {
                this.objectError = "L'objet du message est requis.";
                thereIsAnError = true

            };
            if (!this.message) {
                this.messageError = "Le message est requis.";
                thereIsAnError = true

            };

            if (!thereIsAnError) {
                console.log("Message envoyé avec succès");
                this.submitForm()
                this.resetForm()

            };
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.object = '';
            this.message = '';
        },
        resetFormErrors() {
            this.nameError = "";
            this.emailError = "";
            this.objectError = "";
            this.messageError = "";
        },
        validEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }
};
</script>




<style>
.errors {
    list-style: none;
    color: #ffd157 !important;
    font-weight: bold;
    font-style: italic;
    font-size: 12px;
    text-align: left;
}

.bg-color {
    background-color: #200f45;
}

.bg-blue {
    background-color: #272356;
}

.form-container {
    display: block;
    margin: auto;
    margin-bottom: 100px;
    margin-top: 50px;
    text-align: center;
    border-radius: 5px;
    background-color: #200F45;
    border: 3px solid #8C52FF;
    box-shadow: 10px 10px 2px 1px rgba(0, 0, 0, .2);
    padding: 20px;
    width: 50%;
}

label {
    float: left;
    color: white;
    font-weight: 100;

}

input[type=text],
[type=email],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #8C52FF;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #653cb9;
}

.success-message{
    margin-top: 15px;
    font-size: 20px;
    
}
</style>
