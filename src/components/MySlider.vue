<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            
        };

        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation],
        };
    },
}
</script>
<template>
    <div class="slider">
        <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            
            :navigation="{ nextEl: '.slider__btn-next', prevEl: '.slider__btn-prev', disabledClass: 'slider__btn-disabled' }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="slider__wrapper"
        >
            <swiper-slide>
                <div class="slider__item">
                    <img src="src/assets/images/slider/slide_logo.jpg" alt="" class="slider__item-logo">
                    <div class="slider__item-block">
                        <p class="slider__item-title">Stan Smith<span class="slider__item-title--black">, Forever!</span></p>
                        <button class="slider__item-btn">Купить</button>
                    </div>
                    <img src="src/assets/images/slider/slide_img.jpg" alt="" class="slider__item-img">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slider__item">
                    <img src="src/assets/images/slider/slide_logo.jpg" alt="" class="slider__item-logo">
                    <div class="slider__item-block">
                        <p class="slider__item-title">Stan Smith<span class="slider__item-title--black">, Forever!</span></p>
                        <button class="slider__item-btn">Купить</button>
                    </div>
                    <img src="src/assets/images/slider/slide_img.jpg" alt="" class="slider__item-img">
                </div>
            </swiper-slide>
        </Swiper>
        <button class="slider__btn slider__btn-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 16L10 12L14 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button class="slider__btn slider__btn-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 16L14 12L10 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</template>
<style scoped lang="scss">
.slider {
    position: relative;
    &__btn {
        position: absolute;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--white);
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        user-select: none;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

        &-prev {
            top: 50%;
            left: 0;
            transform: translate(-50%, -50%);
        }

        &-next {
            padding-left: 2px;
            top: 50%;
            right: 0;
            transform: translate(50%, -50%);
        }

        &-disabled {
            opacity: 0;
            pointer-events: none;
        }
    }

    &__item {
        position: relative;
        display: flex;
        background: #F4EFE9;
        border-radius: 20px;
        overflow: hidden;

        &-logo {
            position: absolute;
            top: 16px;
            left: 20px;
            width: 99px;
            height: 40px;
            object-fit: cover;
            pointer-events: none;
            user-select: none;
        }

        &-block {
            margin: 88px 0 0 61px;
        }

        &-title {
            font-size: 38px;
            font-weight: 700;
            max-width: 240px;
            color: var(--green);

            &--black {
                color: var(--black);
            }
        }

        &-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--bg-green);
            color: var(--white);
            width: 178px;
            padding: 14px;
            margin-top: 11px;
            border: none;
            border-radius: 110px;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
                opacity: 0.8;
            }
        }

        &-img {
            width: 642px;
            height: 300px;
            margin-left: auto;
            object-fit: cover;
            pointer-events: none;
            user-select: none;
        }
    }
}
</style>