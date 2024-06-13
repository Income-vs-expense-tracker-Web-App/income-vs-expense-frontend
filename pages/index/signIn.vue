<template>
    <div class="home">
        <div class="container">
            <div class="top">
                <h2 class="font-size-40 weight-7 ">Sign in</h2>
                <p class="mt-1" style="color: var(--color); text-align: center; line-height: 30px;">
                    Monitor your income and expenses effortlessly and gain clarity on your
                    financial journey.</p>
            </div>

            <div class="form mt-4">
                <!-- Email  -->
                <label class="weight-5 white"  for="emailAddress">Email Address</label>
                <input type="email" name="emailAddress" id="emailAddress" class="mt-1">

                <!-- Password  -->
                <label class="mt-2 weight-5 white" for="password">Create Password</label>
                <div class="password mt-1">
                    <input v-if="showPassword" type="text" name="" id="password" v-model="password">
                    <input v-else type="password" name="" id="password" v-model="password">
                    <button @click="toggleShowPassword" class="visbilty">
                        <img v-if="showPassword" src="@/assets/icons//visibility_off.svg" alt="">
                        <img v-else src="@/assets/icons/visibility.svg" alt="">
                    </button>
                </div>

                <NuxtLink class="mt-2 btn btn-secondary" to="/home">
                    <p class="weight-6" style="color: var(--black);">Sign In</p>
                </NuxtLink>

                <NuxtLink class="mt-2 btn btn-primary" to="/home">
                    <img src="@/assets/icons/google.svg" alt="" draggable="false">
                    <p class="ml-1 weight-6 white">Sign In with Google</p>
                </NuxtLink>
            </div>
            <p class="weight-5 mt-2" style="text-align: center; color: var(--color);">
                Don't have an account?
                <a href="/" class="weight-7 white" >Sign up</a>
            </p>
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
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 40px;
    height: 100vh;

    @media (width < 790px) {
        padding: 40px 20px;
    }
}

.container {
    display: flex;
    flex-direction: column;
    max-width: 470px;
    align-items: stretch;
}

.container .top {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container .form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    align-items: stretch;
}

.container .form input[type=email] {
    padding: 12px;
    font-size: 16px;
    border: 1px solid #4E4E4E;
    border-radius: 4px;
    background-color: #121212;
    color: #fff;

    @media (width < 790px) {
        padding: 16px;
    }
}

.container .form input::placeholder {
    color: #52525B;
}

.container .form input:focus {
    outline: 1px solid #1A1A1A;
}

.container .form .password {
    padding: 12px;
    border: 1px solid #4E4E4E;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #121212;

    @media (width < 790px) {
        padding: 16px;
    }
}

.container .form .password input {
    padding: 0px;
    border: 0px;
    outline: none;
    width: 100%;
    height: 20px;
    background-color: #121212;
    color: #fff;
}

.container .form .password .visbilty {
    border: none;
    outline: 0px;
    background: transparent;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
}

.container.form .checkbox {
    display: flex;
    align-items: center;
}

.container .form .checkbox input {
    outline: none;
    width: 15px;
    height: 15px;
}

.container .form .btn {
    padding: 12px;
    border-radius: 4px;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (width < 790px) {
        padding: 16px;
    }
}

.container .form .btn-secondary {
    background-color: var(--white);
}

.container .form .btn-primary {
    background-color: var(--black);
}
</style>