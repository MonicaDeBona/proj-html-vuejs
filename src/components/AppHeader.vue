<script>
import NavbarComp from './HeaderComponents/NavbarComp.vue'
import SliderComp from './HeaderComponents/SliderComp.vue'
export default {
    name: 'AppHeader',

    components: {
        NavbarComp,
        SliderComp
    }
}
</script>

<template>
    <NavbarComp />
    <SliderComp />
</template>

<style lang="scss" scoped>

</style>