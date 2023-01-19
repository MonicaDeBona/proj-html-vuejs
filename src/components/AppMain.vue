<script>
import SearchComp from './MainComponents/SearchComp.vue';
import CategoriesComp from './MainComponents/CategoriesComp.vue';
import CardComp from './MainComponents/CardCompt.vue';
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