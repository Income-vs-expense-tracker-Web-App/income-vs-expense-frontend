<template>
    <div class="hero">
        <div class="card">
            <div class="container">
                <div class="content">
                    <p class="font-size-14 weight-5">Last Month’s Income <span></span></p>
                    <h2>$19,300.2</h2>
                    <p class="font-size-14 weight-5">Nov 30 - Dec 30</p>
                    <Button class="">Add income <img src="@/assets/icons/add.svg" alt=""></Button>
                </div>
                <div class="content income">
                    <p class="font-size-14 weight-5">Last Month’s Expense<span></span></p>
                    <h2>$20,500.55</h2>
                    <p class="font-size-14 weight-5">Nov 30 - Dec 30</p>
                    <Button class="">Add Expense <img src="@/assets/icons/add.svg" alt=""></Button>
                </div>
            </div>
            <div class="net-income weight-7">
                <p>Net Income: <span> -$15,000.25</span></p> <span class="percentage"><img
                        src="@/assets/icons/red_downward_arrow.svg" alt="">2%</span>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '~/components/Button.vue';
export default {
    data() {
        return {
        };
    },
    components: {
        Button
    }
};
</script>

<style scoped>
.hero {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    padding: 28px 0px;

    @media (width < 801px) {
        flex-direction: column-reverse;
        gap: 25px;
    }
}

.hero .card {
    display: flex;
    flex-direction: column;
    gap: 26px;
}

.hero .card .container {
    display: flex;
    /* flex-direction: column; */
    gap: 32px;
}

.hero .card .container .content {
    display: flex;
    align-self: stretch;
    flex-direction: column;
    gap: 8px;
}

.hero .card .container .content h2 {
    font-size: 24px !important;
}

.hero .card .container .content p {
    display: flex;
    align-items: center;
    gap: 6px;
}

.hero .card .container .content p span {
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 50px;
    background-color: var(--ascent);
}

.hero .card .container .income p span {
    background-color: var(--red) !important;
    margin-left: 4px;
}

.hero .card .net-income {
    display: flex;
    gap: 2px;
    align-items: center;
}

.hero .card .net-income p span {
    color: var(--red);
    background-color: transparent !important;
}

.hero .card .net-income .percentage {
    padding: 2px 6px;
    border-radius: 50px;
    font-size: 14px;
    color: var(--red);
    display: flex;
    align-items: center;
}
</style>