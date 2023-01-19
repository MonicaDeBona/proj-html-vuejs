<script>
import SearchComp from './MainComponents/CarsComponent/SearchComp.vue';
import CategoriesComp from './MainComponents/CarsComponent/CategoriesComp.vue';
import CardComp from './MainComponents/CarsComponent/CardComp.vue'
export default {
    name: 'AppMain',

    components: {
        SearchComp,
        CategoriesComp,
        CardComp
    }
}
</script>

<template>
    <SearchComp />
    <CategoriesComp />
    <CardComp />
</template>

<style lang="scss" scoped>

</style>