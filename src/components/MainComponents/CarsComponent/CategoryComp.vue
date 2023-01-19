<script>
import { store } from '../../../store';
export default {
    name: 'CategoryComp',
    props: [
        'carPath',
        'carType',
        'carListing',
    ],
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="category-card d-flex f-column align-items-center">
        <img :src="carPath" alt="cars">
        <h3>{{ carType }}</h3>
        <p>{{ carListing }}</p>
    </div>
</template>

<style lang="scss">
@use '../../../styles/partials/variables' as *;

.category-card {
    border: none;
    padding: 1rem 1.5rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    img {
        width: 200px;
        padding-bottom: .7rem;
    }

    h3 {
        font-weight: 400;
        padding-bottom: .3rem;
    }

    p {
        font-size: .9rem;
        font-weight: 300;

    }
}
</style>