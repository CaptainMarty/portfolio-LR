<template>
    <div class="bg-color">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Contactez-nous !</h1>
                </div>
                <div class="row">
                    <div class="form-container col-4">
                        (en cours)
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
