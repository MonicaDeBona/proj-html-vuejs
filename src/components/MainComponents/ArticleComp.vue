<script>
import { store } from '../../store';

export default {
    name: 'ArticleComp',
    props: [
        'articlePath',
        'articleData',
        'articleAuthor',
        'articleTitle',
        'articleSummary'
    ],
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="article-card d-flex f-column align-items-center justify-content-center ">
        <img :src="articlePath" alt="car pic">
        <div class="article-info">
            <span>{{ articleData }} - </span>
            <span>{{ articleAuthor }}</span>
            <h3>{{ articleTitle }}</h3>
            <p>{{ articleSummary }}</p>
            <button>More</button>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.article-card {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 1rem;
    padding: 1rem;
    text-align: center;

    h3 {
        padding: .7rem 0;
        font-size: 1.3rem;
    }

    p {
        text-align: start;
    }

    button {
        background-color: $secondary-color;
        padding: 1rem 3rem;
        margin: 1.5rem 0;
        border: none;
        color: $main-color;
    }
}
</style>