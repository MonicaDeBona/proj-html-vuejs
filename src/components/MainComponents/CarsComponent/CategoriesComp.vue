<script>
import { store } from '../../../store';
import CategoryComp from './CategoryComp.vue';

export default {
    name: 'CategoriesComp',
    components: {
        CategoryComp
    },
    data() {
        return {
            store,
            cardsList: [
                {
                    path: store.getImagePath('cabrio.jpg'),
                    type: 'Cabrio',
                    listing: '3 Listings'
                },
                {
                    path: store.getImagePath('coupe.jpg'),
                    type: 'Coupe',
                    listing: '0 Listings'
                },
                {
                    path: store.getImagePath('hatchback.jpg'),
                    type: 'Hatchback',
                    listing: '2 Listings'
                },
                {
                    path: store.getImagePath('pickup.jpg'),
                    type: 'Pick Up',
                    listing: '0 Listings'
                },
                {
                    path: store.getImagePath('sedan.jpg'),
                    type: 'Sedan',
                    listing: '3 Listings'
                },
                {
                    path: store.getImagePath('suv.jpg'),
                    type: 'Suv',
                    listing: '4 Listings'
                },
            ]
        }
    },
}
</script>

<template>
    <div class="categories d-flex main-wrapper">
        <CategoryComp v-for="card in cardsList" :carPath="card.path" :carType="card.type" :carListing="card.listing" />
    </div>
</template>

<style lang="scss" scoped>

</style>