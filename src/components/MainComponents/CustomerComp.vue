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
    <div class="customer-card">
        <p>{{ customerText }}</p>
        <img :src="customerPath" alt="customer">
        <h4>{{ customerName }}</h4>
    </div>

</template>

<style lang="scss">
@use '../../styles/partials/variables' as *;

.customer-card {
    margin: 2rem;
    padding: 4rem 2.5rem;
    text-align: center;
    border-radius: 10px;
    background-color: $main-color;

    img {
        width: 100px;
        margin: 2.5rem 0;
    }

    p {
        font-weight: 300;
    }

    h4 {
        font-weight: 300;
    }
}
</style>