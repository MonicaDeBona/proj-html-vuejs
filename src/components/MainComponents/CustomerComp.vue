<script>
import { store } from '../../store';

export default {
    name: 'CustomerComp',
    props: [
        'customerText',
        'customerPath',
        'customerName'
    ],
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="customer-card d-flex f-column align-items-center">
        <p>{{ customerText }}</p>
        <img :src="customerPath" alt="customer">
        <h4>{{ customerName }}</h4>
        <span class="quotes"><i class="fa-solid fa-quote-right"></i></span>
    </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.customer-card {
    margin: 1rem;
    padding: 4rem 2.5rem 0;
    text-align: center;
    border-radius: 10px;
    background-color: $main-color;
    position: relative;
    z-index: 1;

    img {
        width: 100px;
        margin: 2.5rem 0;
    }

    p {
        font-weight: 300;
        z-index: 1;
    }

    h4 {
        font-weight: 300;
    }


    .quotes {
        font-size: 5rem;
        position: relative;
        color: #eeedf5;
        z-index: -1;
        bottom: 260px;
        left: 30px;
        transform: translateX(-50%);

        i {
            transform: rotate(10deg);
        }
    }
}
</style>