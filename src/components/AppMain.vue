<script>
import SearchComp from './MainComponents/CarsComponent/SearchComp.vue';
import CategoriesComp from './MainComponents/CarsComponent/CategoriesComp.vue';
import CategoriesResultsComp from './MainComponents/CarsComponent/CategoriesResultsComp.vue';
import CustomersComp from './MainComponents/CustomersComp.vue';
import ArticlesComp from './MainComponents/ArticlesComp.vue';
export default {
    name: 'AppMain',

    components: {
        SearchComp,
        CategoriesComp,
        CategoriesResultsComp,
        CustomersComp,
        ArticlesComp
    }
}
</script>

<template>
    <SearchComp />
    <CategoriesComp />
    <CategoriesResultsComp />
    <CustomersComp />
    <ArticlesComp />
</template>

<style lang="scss" scoped>

</style>