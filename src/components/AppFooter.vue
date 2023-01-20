<script>
import { store } from '../store';
export default {
    name: 'AppFooter',
    data() {
        return {
            store,
            accountItems: [
                'My Account',
                'Checkout',
                'Cart',
                'Packages',
                'Add Car',
            ],
            linksItems: [
                'Home',
                'About Us',
                'Blog',
                'Contact',
                'Refund & Returns',
            ]
        }
    },

}
</script>

<template>
    <div class="main-wrapper">
        <div class="footer-items d-flex justify-content-between">
            <div class="autocar-main-info">
                <img :src="store.getImagePath('logo-footer-autocar11.png')" alt="Autocar Logo">
                <h5><i class="fa-solid fa-location-dot"></i> New Jersey, USA</h5>
                <h5><i class="fa-solid fa-phone-volume"></i> +1 (234) 567 89 10</h5>
                <h5><i class="fa-regular fa-envelope"></i> example@example.com</h5>
                <span><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i><i
                        class="fa-brands fa-twitter"></i></span>
            </div>
            <div class="newsletter">
                <h3>Join Our Newsletter</h3>
                <h4>Subscribe to be informed about our services and products.</h4>
                <div class="subscribe d-flex f-column">
                    <input type="email" id="email" placeholder="Your Email address">
                    <button>Subscribe <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div class="account-items">
                <h3>My Account</h3>
                <ul>
                    <li v-for="accountItem in accountItems">
                        <a href="#"><i class="fa-solid fa-minus"></i> {{ accountItem }}</a>
                    </li>
                </ul>
            </div>
            <div class="quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li v-for="linkItem in linksItems">
                        <a href="#"><i class="fa-solid fa-minus"></i> {{ linkItem }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <h4><i class="fa-regular fa-copyright"></i> 2022 Autocar - All Rights Reserved.</h4>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.footer-items {
    padding-bottom: 3rem;
}

.autocar-main-info {
    padding-top: 2rem;

    i {
        font-size: 1.5rem;
    }

    img {
        width: 210px;
        padding-bottom: 1.5rem;
    }

    h5 {
        font-weight: 400;
        font-size: 1.1rem;
        padding-bottom: 1rem;

        i {
            padding-right: 1rem;
        }

        .fa-location-dot {
            padding-right: 1.5rem;
        }
    }

    span i {
        padding: 0 1rem;
    }
}

.newsletter {
    h3 {
        padding: 3rem 0 .5rem;
        font-size: 1.8rem;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: 300;
        padding-bottom: 1.5rem;
    }

    input,
    button {
        padding: 1.5rem 4rem;
        display: block;
        border: none;
        border-radius: 5px;
        width: 400px;
        font-size: 1.1rem;
        color: $accent-color;
        background-color: $main-color;
    }

    input {
        margin-bottom: .2rem;
    }
}

.account-items,
.quick-links {
    padding-top: 3rem;

    h3 {
        font-size: 1.7rem;
        padding-bottom: 1rem;
    }

    ul li a {
        color: $main-color;
        line-height: 2rem;

        i {
            padding-right: .5rem;
        }
    }
}

h4 {
    text-align: center;
    padding-bottom: 2rem;
    font-weight: 300;
}
</style>