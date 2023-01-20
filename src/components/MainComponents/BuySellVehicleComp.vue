<script>
import { store } from '../../store';
export default {
    name: 'BuySellVehicleComp',
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <section class="main-wrapper d-flex">
        <div class="imgs-box">
            <img class="rotate" :src="store.getImagePath('circle-auto-car-1.png')" alt="pattern">
            <img class="autocar-abs" :src="store.getImagePath('aoutcar-about-1.png')" alt="">
            <div class="years d-flex align-items-center">24 Years of Experience</div>
            <div class="experts d-flex align-items-center">240 Social Expert Team</div>
        </div>
        <div class="info-text">
            <h2>
                Want to buy or sell vehicle?
            </h2>
            <p>
                You can put your vehicles for sale by registering on out website. Whether you are a dealer or sell
                personally. Sell your vechicle in the most profitable way. With this system, which has millions of
                member, you will be able to buy and sell vehicles qquickly.
            </p>
            <img class="divider" :src="store.getImagePath('divider.jpg')" alt="text divider">
            <div class="col d-flex align-items-center">
                <div class="icons">
                    <i class="fa-solid fa-car"></i>
                    <i class="fa-solid fa-car"></i>
                </div>
                <div class="text-container">
                    <div class="text">
                        <h3>
                            Model Vehicles
                        </h3>
                        <p>We are sure that you will find vehicles of suitable models on our website</p>
                    </div>
                    <div class="text">
                        <h3>
                            Model Vehicles
                        </h3>
                        <p>We are sure that you will find vehicles of suitable models on our website</p>
                    </div>
                </div>
            </div>
            <button>Get to know us <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section {
    padding: 2rem 6rem;

    .imgs-box {
        flex-basis: 60%;
        position: relative;

        .experts,
        .years {
            height: 170px;
            width: 170px;
            border-radius: 50%;
            background-color: $secondary-color;
            position: absolute;
            color: $main-color;
            font-size: 1.5rem;
            text-align: center;
        }

        .years {
            bottom: 80px;
            right: 150px;
        }

        .experts {
            top: 80px;
            left: 80px;
        }

        .rotate {
            animation: rotation 10s infinite linear;
        }

        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(359deg);
            }
        }

        .autocar-abs {
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    .info-text {
        flex-basis: 40%;

        h2 {
            font-weight: 700;
            font-size: 2rem;
            padding-bottom: 1rem;
        }

        p {
            font-size: 1.1rem;
            font-weight: 300;
        }

        .divider {
            padding: .8rem 0 1.5rem;
        }

        .fa-car {
            font-size: 3.5rem;
            padding: 1rem 0 1.5rem 0;
            vertical-align: middle;
            text-align: center;
        }

        .text {
            margin-bottom: 1rem;

            h3 {
                font-size: 1.5rem;
            }
        }
    }

    button {
        background-color: $secondary-color;
        border: none;
        padding: 1.2rem 2.8rem;
        font-size: 1.1rem;
        color: $main-color;

        i {
            vertical-align: middle;
        }
    }
}
</style>