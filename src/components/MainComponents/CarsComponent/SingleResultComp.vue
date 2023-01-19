<script>
import { store } from '../../../store';

export default {
    name: 'SingleResultComp',
    props: [
        'carPath',
        'carModel',
        'carType',
        'carPrice',
        'carBrand',
        'carFuel'
    ],
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="single-card d-flex f-column">
        <img :src="carPath" alt="carBrand">
        <h3>{{ carModel }} <i class="fa-solid fa-circle-check"></i></h3>
        <h4>{{ carType }}</h4>
        <div class="info d-flex justify-content-between">
            <div class="span-container">
                <span><i class="fa-solid fa-dollar-sign"></i> {{ carPrice }}</span>
                <span><i class="fa-solid fa-car"></i> {{ carBrand }}</span>
                <span><i class="fa-solid fa-gas-pump"></i> {{ carFuel }}</span>
            </div>
            <span><i class="fa-solid fa-heart"></i></span>
        </div>
    </div>

</template>

<style lang="scss">
@use '../../../styles/partials/variables' as *;

.single-card {
    width: calc(100% / 4);
    padding: 1rem;
    border: none;
    padding: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    h3,
    h4 {
        font-weight: 300;
        font-size: 1rem;
    }

    h3 {
        padding: .3rem 0;
    }

    h4 {
        padding-bottom: .5rem;
    }

    span {
        font-weight: 300;
        font-size: .9rem;
        padding-right: 1rem;

        .fa-heart {
            font-size: 1rem;
            color: $accent-color;
        }
    }
}
</style>