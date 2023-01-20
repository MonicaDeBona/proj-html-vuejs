<script>
import { store } from '../../../store';
import SingleResultComp from './SingleResultComp.vue';

export default {
    name: 'CategoriesResultsComp',
    components: {
        SingleResultComp,
    },
    data() {
        return {
            store,
            cardsList: [
                {
                    path: store.getImagePath('bmw-8-series-convertible-technical-data-sp-desktop-400x300.jpg'),
                    model: 'BMW M9',
                    type: 'Cabrio',
                    price: '34.000',
                    brand: 'BMW',
                    fuel: 'Electric',
                },
                {
                    path: store.getImagePath('bmw88-400x300.jpg'),
                    model: 'BMW M8',
                    type: 'Cabrio',
                    price: '34.000',
                    brand: 'BMW',
                    fuel: 'Diesel',
                },
                {
                    path: store.getImagePath('bmw442-400x300.jpg'),
                    model: 'BMW 4',
                    type: 'Cabrio',
                    price: '34.000',
                    brand: 'BMW',
                    fuel: 'Gasoline',
                },
                {
                    path: store.getImagePath('yeni-ibiza-2-400x300.jpg'),
                    model: 'Seat Ibiza',
                    type: 'Hatchback',
                    price: '27.000',
                    brand: 'Seat',
                    fuel: 'Electric',
                },
                {
                    path: store.getImagePath('makyajli-2022-seat-arona-1-400x300.jpg'),
                    model: 'Seat Arona',
                    type: 'SUV',
                    price: '68.000',
                    brand: 'Seat',
                    fuel: 'Gasoline',
                },
                {
                    path: store.getImagePath('vw-taigo3832-400x300.jpg'),
                    model: 'Volkswagen Taigo',
                    type: 'SUV',
                    price: '52.000',
                    brand: 'Volkswagen',
                    fuel: 'Electric',
                },
                {
                    path: store.getImagePath('2019-vw-t-cross-400x300.jpg'),
                    model: 'Volkswagen T-Cross',
                    type: 'SUV',
                    price: '47.000',
                    brand: 'Volkswagen',
                    fuel: 'Diesel',
                },
                {
                    path: store.getImagePath('volkswagen-passat-1280x720-1-400x300.jpg'),
                    model: 'Volkswagen Passat',
                    type: 'Sedan',
                    price: '32.000',
                    brand: 'Volkswagen',
                    fuel: 'Diesel',
                },
            ]
        }
    }
}
</script>

<template>
    <div class="d-flex f-column align-items-center">
        <div class="category-results d-flex main-wrapper f-wrap justify-content-between">
            <SingleResultComp v-for="card in cardsList" :carPath="card.path" :carModel="card.model"
                :carPrice="card.price" :carType="card.type" :carBrand="card.brand" :carFuel="card.fuel" />
        </div>
        <button>Show All Cars <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/variables' as *;

.category-results {
    padding: 2rem 0 1rem;
    row-gap: 1.5rem;
}

button {
    background-color: $secondary-color;
    color: $main-color;
    padding: 1rem 2.5rem;
    border: 1px solid $secondary-color;
    margin-bottom: 2rem;
    font-size: 1.1rem;

    i {
        vertical-align: middle;
    }
}
</style>