<script>
import { store } from '../../store';
export default {
    name: 'NavbarComp',
    data() {
        return {
            store,
            navItems: [
                'Home',
                'About Us',
                'Vehicles',
                'Dealers',
                'Packages',
                'Blog',
                'Contact'
            ]
        }
    }
}
</script>

<template>
    <div class="nav-wrapper d-flex align-items-center justify-content-between">
        <div class="main-logo">
            <img :src="store.getImagePath('logo-autocar11.png')" alt="Autocar Main Logo">
        </div>
        <nav class="menu">
            <ul class="d-flex">
                <li v-for="navItem in navItems">
                    <a href="#">
                        {{ navItem }}
                    </a>
                </li>
            </ul>
        </nav>
        <div class="user-cart-actions d-flex">
            <button class="padlock"><img class="button-img" :src="store.getImagePath('padlock.png')" alt=""> My
                Account</button>
            <button><img class="button-img" :src="store.getImagePath('add.png')" alt="">Add Car</button>
        </div>
        <div class="hamburger-menu">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div class="operator-chat">
            <button><img class="button-img" :src="store.getImagePath('headphones.png')" alt="">+1 (234) 567 89
                10</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.main-logo {
    padding-top: 5px;

    img {
        width: 210px;
        padding-top: .5rem;

    }
}

nav ul li a {
    color: $secondary-color;
    padding-left: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
}

button {
    color: $main-color;
    background-color: $secondary-color;
    border: 1px solid $secondary-color;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;

    .button-img {
        filter: invert(100%);
        width: 40px;
        margin-right: .3rem;
    }
}

.padlock {
    margin-right: .5rem;
}

.fa-bars {
    font-size: 1.5rem;
    padding: 0 1.5rem;
}
</style>