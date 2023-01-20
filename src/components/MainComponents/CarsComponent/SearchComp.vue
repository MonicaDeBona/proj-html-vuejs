<script>
export default {
    name: 'SearchComp',
}
</script>

<template>
    <div class="select-search-container main-wrapper d-flex justify-content-between">
        <input type="text" id="keywords" placeholder="Keywords">
        <input type="text" id="Location" placeholder="Location">
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
    padding: 2.5rem 1rem 2rem;

    input,
    button,
    select {
        background-color: $main-color;
        border: .1px solid $accent-color;
        color: $accent-color;
        border-radius: 5px;
        font-size: 1rem;
        padding: 1.5rem 1.5rem;
        width: 10rem;
        text-align: center;
    }

    .search {
        background-color: $secondary-color;
        border: .1px solid $secondary-color;
        color: $main-color;
        font-weight: bold;
    }
}
</style>