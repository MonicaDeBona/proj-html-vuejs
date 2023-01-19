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
    <div class="article-card d-flex f-column align-items-center ">
        <img :src="articlePath" alt="car pic">
        <div>
            <span>{{ articleData }}</span>
            <span>{{ articleAuthor }}</span>
            <h3>{{ articleTitle }}</h3>
            <p>{{ articleSummary }}</p>
            <button>More</button>
        </div>
    </div>


</template>

<style lang="scss">
.article-card {
    padding: 2rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    justify-content: space-around;
}
</style>