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
        <div class="article-img">
            <img :src="articlePath" alt="car pic">
        </div>
        <div class="article-info">
            <span>{{ articleData }}</span>
            <span>{{ articleAuthor }}</span>
            <h3>{{ articleTitle }}</h3>
            <p>{{ articleSummary }}</p>
            <button>More</button>
        </div>
    </div>


</template>

<style lang="scss" scoped>
.article-card {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 1rem;
    padding: 1rem;

}
</style>