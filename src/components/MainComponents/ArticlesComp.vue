<script>
import { store } from '../../store';
import ArticleComp from './ArticleComp.vue';

export default {
    name: 'ArticlesComp',
    components: {
        ArticleComp,
    },
    data() {
        return {
            store,
            articlesList: [
                {
                    path: store.getImagePath('news-autocar-1-300x180.jpg'),
                    data: '06.07.2022',
                    author: 'Auto Car',
                    title: 'Why is BMW loved?',
                    summary: 'BMWs have a different line with their designs and almost [...]'
                },
                {
                    path: store.getImagePath('news-autocar-2-300x180.jpg'),
                    data: '06.07.2022',
                    author: 'Auto Car',
                    title: 'How solid is Audi?',
                    summary: 'According to Euro NCAP data with different test organizations, there [...]'
                },
                {
                    path: store.getImagePath('news-autocar-5-300x180.jpg'),
                    data: '06.07.2022',
                    author: 'Auto Car',
                    title: 'What brand is Skoda?',
                    summary: 'Skoda is one of the leading automotive manufacturers on the [...]'
                },
                {
                    path: store.getImagePath('news-autocar-6-300x180.jpg'),
                    data: '06.07.2022',
                    author: 'Auto Car',
                    title: 'Is the Auris diesel',
                    summary: 'You will have a quieter vechicle that burns less than [...]'
                },
            ]
        }
    },
}
</script>
<template>
    <section class=" articles main-wrapper">
        <div class="recent-articles d-flex f-column align-items-center">
            <span class="icon-circle d-flex align-items-center justify-content-center">
                <i class="fa-regular fa-thumbs-up"></i>
            </span>
            <h2>
                Resent Articles
            </h2>
            <h5>
                Useful Information about car.
            </h5>
        </div>
        <div class="articles-items d-flex justify-content-around">
            <ArticleComp v-for="article in articlesList" :articlePath="article.path" :articleData="article.data"
                :articleAuthor="article.author" :articleTitle="article.title" :articleSummary="article.summary" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.articles {
    padding: 4rem 0;

    .icon-circle {
        height: 110px;
        width: 110px;
        background-color: $secondary-color;
        border-radius: 50%;
        margin-bottom: 1rem;

        i {
            color: $main-color;
            font-size: 3rem;
        }
    }

    h2 {
        font-size: 2rem;
        padding-bottom: .5rem;
    }

    h5 {
        font-weight: 300;
        font-size: 1.1rem;
        padding-bottom: 1.5rem;
    }
}
</style>