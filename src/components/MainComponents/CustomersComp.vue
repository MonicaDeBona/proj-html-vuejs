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
    <div class="customers">
        <div class=" customer-container main-wrapper d-flex justify-content-center align-items-center">
            <CustomerComp v-for="customer in customersList" :customerText="customer.text" :customerPath="customer.path"
                :customerName="customer.name" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.customers {
    background-image: url('../../assets/imgs/comment-bg-autocar.jpg');
    background-position: center;
    background-size: cover;
    height: 900px;

    .customer-container {
        height: 100%;
    }
}
</style>