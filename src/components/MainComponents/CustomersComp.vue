<script>
import { store } from '../../store';
import CustomerComp from './CustomerComp.vue';
export default {
    name: 'CustomersComp',
    components: {
        CustomerComp,
    },
    data() {
        return {
            store,
            customersList: [
                {
                    text: 'We are a gallery vehicle dealer. Before we met this site, our sales were sluggish..',
                    path: store.getImagePath('man1.png'),
                    name: 'Adam',

                },
                {
                    text: 'We are a gallery vehicle dealer. Before we met this site, our sales were sluggish..',
                    path: store.getImagePath('testimonial2-1.png'),
                    name: 'Christie',

                },
                {
                    text: 'We are a gallery vehicle dealer. Before we met this site, our sales were sluggish..',
                    path: store.getImagePath('man2.png'),
                    name: 'Robert',

                },
                {
                    text: 'We are a gallery vehicle dealer. Before we met this site, our sales were sluggish..',
                    path: store.getImagePath('testimonial4-1.png'),
                    name: 'Elizabeth',

                }
            ]
        }
    },
}
</script>
<template>
    <div class="customers d-flex f-column justify-content-center">
        <div class="customers-text d-flex f-column align-items-center">
            <span><i class="fa-regular fa-thumbs-up"></i></span>
            <span><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                    class="fa-regular fa-star"></i></span>
            <h2>What Are Our Customers Saying?</h2>
            <h5>Opinions from our happy customers.</h5>
        </div>
        <div class=" main-wrapper d-flex justify-content-center align-items-center">
            <CustomerComp v-for="customer in customersList" :customerText="customer.text" :customerPath="customer.path"
                :customerName="customer.name" />
        </div>
        <div class="slider-items d-flex justify-content-center">
            <div class="previous"></div>
            <div class="next"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.customers {
    padding: 5rem 0;
    background-image: url('../../assets/imgs/comment-bg-autocar.jpg');
    background-position: center;
    background-size: cover;
    height: 900px;

    .customers-text {
        color: $main-color;

        .fa-thumbs-up {
            font-size: 2.5rem;
        }

        .fa-star {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        h2 {
            padding-bottom: .3rem;
            font-size: 2rem;
        }

        h5 {
            font-size: 1.1rem;
            font-weight: 400;
            padding-bottom: 2rem;
        }
    }
}

.slider-items {


    .previous,
    .next {
        height: 1px;
        border-radius: 5px;
    }

    .previous {
        width: 110px;
        border: 4.5px solid $secondary-color;
        margin-right: .5rem;
    }

    .next {
        width: 55px;
        border: 4.5px solid $accent-color;
    }
}
</style>