<script>
export default {
    name: 'SearchComp',
}
</script>

<template>
    <div class="select-search-container cars-comp-wrapper d-flex justify-content-between">
        <button>
            Keywords
        </button>
        <button>
            Location
        </button>
        <select name="categories" id="categories">
            <option value="categories">All Categories</option>
        </select>
        <select name="brand" id="brand">
            <option value="brand">Brand</option>
        </select>
        <select name="fuel" id="fuel">
            <option value="fuel">Fuel</option>
        </select>
        <select name="transmission" id="transmission">
            <option value="transmission">Transmission</option>
        </select>
        <select name="status" id="status">
            <option value="status">Status</option>
        </select>
        <button class="search">
            Search
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/variables' as *;

.select-search-container {
    padding: 3rem 1rem 2rem 1rem;

    button,
    select {
        background-color: $light-color;
        border: .1px solid $gray-color;
        padding: 1.5rem 2.5rem;
        color: $gray-color;
        border-radius: 5px;
        font-size: 1rem;
    }

    .search {
        background-color: $dark-color;
        border: .1px solid $dark-color;
        color: $light-color;
        font-weight: bold;
    }
}
</style>