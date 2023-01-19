<script>
import { store } from '../../../store';
export default {
    name: 'CategoriesComp',
    data() {
        return {
            store,
            carsCategory: [
                {
                    thumb: store.getImagePath('cabrio.jpg'),
                    type: 'Cabrio',
                    listing: '3 Listings'
                },
                {
                    thumb: store.getImagePath('coupe.jpg'),
                    type: 'Coupe',
                    listing: '0 Listings'
                },
                {
                    thumb: store.getImagePath('hatchback.jpg'),
                    type: 'Hatchback',
                    listing: '2 Listings'
                },
                {
                    thumb: store.getImagePath('pickup.jpg'),
                    type: 'Pick Up',
                    listing: '0 Listings'
                },
                {
                    thumb: store.getImagePath('sedan.jpg'),
                    type: 'Sedan',
                    listing: '3 Listings'
                },
                {
                    thumb: store.getImagePath('suv.jpg'),
                    type: 'Suv',
                    listing: '4 Listings'
                },
            ]
        }
    },
    methods: {

    }

}
</script>

<template>
    <div class="categories d-flex cars-comp-wrapper justify-content-between">
        <div class="category-card d-flex f-column align-items-center" v-for="carCategory in carsCategory">
            <img :src="carCategory.thumb" alt="cars">
            <h3>{{ carCategory.type }}</h3>
            <p>{{ carCategory.listing }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>