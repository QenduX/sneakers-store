<script>
import { mapActions } from 'pinia'
import { useSneakersStore } from '@/store/sneakersStore'

export default {
    props: {
        item: Object,
    },
    methods: {
        addFavorites(id) {
            this.$emit('updateFavorite', id)
        },
        addToCart(item) {
            this.$emit('updateCart', item)
        },
    }
}
</script>
<template>
    <div class="item">
        <button 
            class="item__follow" 
            :class="item.isFavorites ? 'active' : ''"
            @click="addFavorites(item.id)"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <img class="item__img" :src="item.image" alt="">
        <p class="item__title">{{ item.title }} <span>{{  }}</span></p>
        <div class="item__bottom">
            <div class="item__price">
                <p class="item__price-text">Цена:</p>
                <p class="item__price-cost">{{ item.cost }} руб.</p>
            </div>
            <button class="item__btn" @click="addToCart(item)" :class="item.inCart ? 'item__btn--active' : ''">
                <svg v-if="item.inCart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3333 4L5.99996 11.3333L2.66663 8" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z" fill="#D3D3D3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="#D3D3D3"/>
                </svg>
            </button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.item {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    border-radius: 40px;
    border: 1px solid #F3F3F3;

    &__follow {
        position: absolute;
        top: 30px;
        left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        border: 1px solid #F3F3F3;
        cursor: pointer;
        transition: all 0.2s ease;

        path {
            transition: all 0.2s ease;
        }

        &:hover {
            border: 1px solid var(--text-gray);

            path {
                stroke: var(--text-gray);
            }
        }

        &.active {
            background: #FEF0F0;

            path {
                stroke: transparent;
                fill: #FF8585;
            }
        }
    }

    &__img {
        width: 133px;
        height: 112px;
        margin: 0 auto;
        object-fit: cover;
        user-select: none;
    }

    &__title {
        font-size: 14px;
        font-weight: 400;
        color: var(--black);
        margin-top: 14px;
    }

    &__bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 14px;
    }

    &__price {
        display: flex;
        flex-direction: column;

        &-text {
            font-size: 11px;
            font-weight: 500;
            color: var(--text-gray-light);
        }

        &-cost {
            font-size: 14px;
            font-weight: 700;
            color: var(--black);
            margin-top: 2px;
        }
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        border: 1px solid #F3F3F3;
        cursor: pointer;
        transition: all 0.2s ease;

        path {
            transition: all 0.2s ease;
        }

        &:hover {
            border: 1px solid var(--text-gray);

            path {
                fill: var(--text-gray);
            }
        }

        &--active {
            border: none;
            background: var(--green-gradient);

            &:hover {
                border: none;

                path {
                    fill: transparent;
                }
            }
        }
    }
}
</style>