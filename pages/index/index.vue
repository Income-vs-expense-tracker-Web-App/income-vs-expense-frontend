<template>
    <div class="home">
        <div class="container">
            <div class="top">
                <h2 class="font-size-40 weight-7 ">Create Account</h2>
                <p class="mt-1" style="color: var(--color); text-align: center; line-height: 30px;">
                    Take control of your finances with our intuitive tracker. Monitor your income and expenses
                    effortlessly and gain clarity on your financial journey.</p>
            </div>

            <div class="form mt-2">
                <!-- Fullname -->
                <label class="weight-5" for="fullName">First & Last name</label>
                <input class="mt-1" type="text" name="fullName" id="fullName">

                <!-- Email Address  -->
                <label class="mt-2 weight-5" for="emailAddre">Email Address</label>
                <input type="email" name="emailAddress" id="emailAddress" class="mt-2">

                <!-- Password -->
                <label class="mt-2 weight-5" for="password">Create Password</label>
                <div class="password mt-1">
                    <input v-if="showPassword" type="text" name="" id="password" v-model="password">
                    <input v-else type="password" name="" id="password" v-model="password">
                    <button @click="toggleShowPassword" class="visbilty">
                        <img v-if="showPassword" src="@/assets/icons//visibility_off.svg" alt="">
                        <img v-else src="@/assets/icons/visibility.svg" alt="">
                    </button>
                </div>

                <NuxtLink class="mt-2 btn btn-secondary weight-6" to="/home">
                    <p class="weight-6" style="color: var(--black);">Sign Up</p>
                </NuxtLink>
            </div>
            <p class="weight-5 mt-2" style="text-align: center; color: var(--color);">
                Already have an account?
                <NuxtLink href="/signIn" class="weight-7" style="color: var(--white);">Sign In</NuxtLink>
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
    padding: 40px 40px;
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

.container .form input[type=text],
input[type=password],
input[type=email] {
    padding: 12px;
    font-size: 16px;
    border: 1px solid #4E4E4E;
    border-radius: 4px;
    outline: 0px;
    background-color: #121212;


    @media (width < 790px) {
        padding: 16px;
    }
}

.container .form label {
    color: var(--white);
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
    background-color: #F8FAFC;
    color: #000 !important;
}

.container .form .btn-primary {
    background-color: var(--black);
}
</style>