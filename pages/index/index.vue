<template>
    <div class="sign-up">
        <div class="form">
            <div class="top">
                <h2 class="font-size-40 weight-8 ">Create Account</h2>
                <p class="mt-1" style="color: var(--color); text-align: center; line-height: 30px;">
                    Monitor your income and expenses effortlessly and gain clarity on your
                    financial journey.</p>
            </div>

            <div class="container mt-4">
                <input type="text" name="fullName" id="fullName" placeholder="First & Last name">
                <input type="email" name="emailAddress" id="emailAddress" class="mt-2" placeholder="Email Address">

                <div class="password mt-2">
                    <input v-if="showPassword" type="text" name="" id="" placeholder="Create Password"
                        v-model="password">
                    <input v-else type="password" name="" id="" placeholder="Create Password" v-model="password">
                    <button @click="toggleShowPassword">
                        <img v-if="showPassword" src="@/assets/icons//visibility_off.svg" alt="">
                        <img v-else src="@/assets/icons/visibility.svg" alt="">
                    </button>
                </div>
                <span class="checkbox mt-1 pointer" >
                    <input type="checkbox" name="accept-term pointer" id="accept-terms" >
                    <label for="accept-terms" class="ml-1 pointer">I agree with the <a href="#">Terms & Conditions</a> of this app</label>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPassword: false,
            password: '',
        }
    },
    methods: {
        toggleShowPassword() {
            this.showPassword = !this.showPassword
        }
    }
}
</script>

<style scoped>
.sign-up {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 40px;
    height: 100vh;
}

.form {
    display: flex;
    flex-direction: column;
    max-width: 470px;
    align-items: stretch;
}

.form .top {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    align-items: stretch;
}

.form .container input[type=text],
input[type=password],
input[type=email] {
    padding: 24px;
    font-size: 16px;
    border: 1px solid #4E4E4E;
    border-radius: 4px;
}

.form .container input::placeholder {
    color: #52525B;
}

.form .container input:focus {
    outline: 1px solid #1A1A1A;
}

.form .container .password {
    padding: 24px;
    border: 1px solid #4E4E4E;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
}

.form .container .password input {
    padding: 0px;
    border: 0px;
    outline: none;
}

.form .container .password button {
    border: none;
    outline: 0px;
    background: transparent;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
}

.form .container .checkbox {
    display: flex;
    align-items: center;
}

.form .container .checkbox input {
    outline: none;
    width: 15px;
    height: 15px;
}
</style>