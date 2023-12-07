<script>
import { mapState } from 'pinia';
import { useCartStore } from '@/store/cartStore'
import MyIcon from './UI/MyIcon.vue';

export default {
    props: {
        showModal: Boolean,
    },  
    components: { MyIcon },
    methods: {
        onShowModal() {
            this.$emit('update:showModal', true)
        },
    },
    computed: {
        ...mapState(useCartStore, {
            countCost: 'countCost',
        })
    },
}
</script>
<template>
    <header class="header">
        <router-link to="/">
            <div class="header__logo">
                <img class="header__logo-icon" src="src/assets/images/logo.svg" alt="logo">
                <div class="header__logo-block">
                    <p class="header__logo-title">SNEAKERS STORE</p>
                    <p class="header__logo-text">Магазин лучших кроссовок</p>
                </div>
            </div>
        </router-link>
        <nav class="header__navbar">
            <ul class="header__navbar-list">
                <li class="header__navbar-item item" @click="onShowModal">
                    <MyIcon iconName="cart" class="item__icon"></MyIcon>
                    <p class="item__text item__text-bold">{{ countCost }} руб.</p>
                </li>
                <li class="header__navbar-item">
                    <router-link to="/favorites" class="item">
                        <MyIcon iconName="favorites" class="item__icon"></MyIcon>
                        <p class="item__text">Избранное</p>
                    </router-link>
                </li>
                <li class="header__navbar-item">
                    <router-link to="/profile" class="item">
                        <MyIcon iconName="profile" class="item__icon"></MyIcon>
                        <p class="item__text">Профиль</p>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;
    padding: 45px 60px 45px 45px;
    border-bottom: 1px solid #EAEAEA;

    &__logo {
        display: flex;

        &:hover {
            .header__logo-icon {
                transform: rotate(30deg);
            }
        }

        &-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            transition: all 0.2s ease-in;
        }

        &-block {
            display: flex;
            flex-direction: column;
            margin-left: 16px;
        }

        &-title {
            color: var(--black);
            font-size: 20px;
            font-weight: 700;
        }

        &-text {
            color: var(--text-gray);
            font-size: 14px;
            font-weight: 400;
        }
    }

    &__navbar {
        margin-left: auto;

        &-list {
            display: flex;

            .item {
                display: flex;
                align-items: center;
                cursor: pointer;

                &__icon {
                    margin-right: 8px;
                }

                &__text {
                    color: var(--text-gray-dark);
                    font-size: 14px;
                    font-weight: 400;

                    &-bold {
                        font-weight: 700;
                    }
                }
            }
        }

        &-item {
            margin-left: 32px;
        }
    }
}
</style>
