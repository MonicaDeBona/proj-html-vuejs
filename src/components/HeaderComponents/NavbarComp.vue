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
        <div class="user-cart-actions">
            <button><i class="fa-solid fa-lock"></i>My Account</button>
            <button><i class="fa-solid fa-plus"></i>Add Car</button>
        </div>
        <div class="hamburger-menu">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div class="operator-chat">
            <button><i class="fa-solid fa-headphones"></i>+1 (234) 567 89 10</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.main-logo {
    padding-top: 10px;

    img {
        width: 210px;
    }
}

nav ul li a {
    color: $dark-color;
    padding-left: 1rem;
}

button {
    color: $light-color;
    background-color: $dark-color;
    border: 1px solid $dark-color;
    border-radius: 5px;
    padding: 1.5rem;
}
</style>