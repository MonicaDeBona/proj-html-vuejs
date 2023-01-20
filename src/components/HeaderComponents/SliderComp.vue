<script>
import { store } from '../../store';
export default {
    name: 'SliderComp',
    data() {
        return {
            store,
            activeIndex: 0,
            sliderImages: [
                store.getImagePath('slider-autocar-5.jpg'),
                store.getImagePath('slider-autocar-6.jpg')
            ]
        }
    },
    methods: {
        nextSlide() {
            this.activeIndex++;
            if (this.activeIndex >= this.sliderImages.length) {
                this.activeIndex = 0;
            }
            this.$emit('imageChanged', this.activeIndex);
        },
        previousSlide() {
            this.activeIndex--;
            if (this.activeIndex < 0) {
                this.activeIndex = this.sliderImages.length - 1;
            }
            this.$emit('imageChanged', this.activeIndex);
        },
    }
}
</script>

<template>
    <div class="slider">
        <div class="img-slider">
            <img class="img-slider" v-for="(image, index) in sliderImages" :src="image" :key="index"
                v-show="index === activeIndex">
        </div>
        <div class="slider-buttons d-flex align-items-center">
            <button @click="previousSlide" class="slider-nav-button">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button @click="nextSlide" class="slider-nav-button">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.slider {
    border-top: 13px solid $secondary-color;
    border-bottom: 13px solid $secondary-color;

    .img-slider {
        width: 100%;
        height: 800px;

        img {
            object-fit: cover;
            object-position: center;
        }
    }

    .slider-buttons {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 30px;
        right: 30px;

        button {
            background-color: transparent;
            border: none;
            color: $main-color;
            font-size: 1.3rem;

            i {
                background-color: $secondary-color;
                padding: 1.3rem;
            }
        }

        .slider-nav-button:first-child {
            margin-right: auto;
        }

        .slider-nav-button:last-child {
            margin-left: auto;
        }
    }
}
</style>