<script>
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '@/store/cartStore'
import MyCartItem from '@/components/MyCartItem.vue';

export default {
    components: { MyCartItem },
    props: {
        showModal: Boolean,
    },  
    methods: {
        onShowModal() {
            this.$emit('update:showModal', false)
        },
        ...mapActions(useCartStore, {
            addToCart: 'addToCart',
            removeFromCart: 'removeFromCart',
            acceptOrder: 'acceptOrder',
            clearState: 'clearState',
        })
    },
    computed: {
        ...mapState(useCartStore, {
            cart: 'cart',
            cartState: 'cartState',
            countOrder: 'countOrder',
            countCost: 'countCost',
            taxCost: 'taxCost',
        }),
    },
}
</script>
<template>
    <div class="cart">
        <p class="cart__title">Корзина</p>
        <div v-if="cartState === 'cart'" class="cart__block">
            <div class="cart__items">
                <MyCartItem 
                    v-for="item in cart" 
                    :key="item.id" 
                    :item="item"
                    @remove="removeFromCart"
                ></MyCartItem>
            </div>
            <div class="cart__bottom">
                <ul class="cart__info">
                    <li class="cart__info-item">
                        <p class="cart__info-text">Итого:</p>
                        <span class="cart__info-border"></span>
                        <p class="cart__info-total">{{ countCost }} руб.</p>
                    </li>
                    <li class="cart__info-item">
                        <p class="cart__info-text">Налог 13%:</p>
                        <span class="cart__info-border"></span>
                        <p class="cart__info-total">{{ taxCost }} руб.</p>
                    </li>
                </ul>
                <button class="cart__btn">
                    <span class="cart__btn-text" @click="acceptOrder">Оформить заказ</span>
                    <svg class="cart__btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <div v-else-if="cartState === 'clear'" class="cart__none">
            <img src="src/assets/images/cart/none.png" alt="none" class="cart__none-img">
            <p class="cart__none-title">Корзина пустая</p>
            <p class="cart__none-text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button class="cart__none-btn" @click="onShowModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Вернуться назад
            </button>
        </div>
        <div v-else-if="cartState === 'success'" class="cart__success">
            <img src="src/assets/images/cart/success.png" alt="none" class="cart__none-img">
            <p class="cart__none-title">Заказ оформлен!</p>
            <p class="cart__none-text">Ваш заказ #{{ countOrder }} скоро будет передан курьерской доставке</p>
            <button class="cart__none-btn" @click="clearState()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Вернуться назад
            </button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.cart {
    display: flex;
    flex-direction: column;
    background: var(--white);
    width: 385px;
    height: 100%;
    padding: 30px;
    margin-left: auto;
    overflow: auto;

    &__block {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    &__title {
        font-size: 24px;
        font-weight: 700;
        color: var(--black);
    }

    &__items {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin: 30px 0;
    }

    &__bottom {
        display: flex;
        flex-direction: column;
        margin-top: auto;
    }

    &__info {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;

        &-item {
            display: flex;
        }

        &-text {
            font-size: 16px;
            font-weight: 400;
            color: var(--black);
            flex-shrink: 0;
        }

        &-border {
            width: 100%;
            height: calc(100% - 4px);
            margin: 0 9px;
            border-bottom: 1px dashed #DFDFDF;
        }

        &-total {
            font-size: 16px;
            font-weight: 600;
            color: var(--black);
            flex-shrink: 0;
        }
    }

    &__btn {
        position: relative;
        z-index: 1;
        background: var(--bg-green);
        padding: 18px;
        margin-top: 24px;
        border: none;
        border-radius: 18px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            transition: all 0.1s ease;
            opacity: 0.95;
        }
        
        &-text {
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            color: var(--white);
        }

        &-icon {
            position: absolute;
            top: 50%;
            right: 23px;
            transform: translate(0, -50%);
        }
    }

    &__none {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;

        &-img {
            height: 140px;
            object-fit: cover;
        }

        &-title {
            font-size: 22px;
            font-weight: 600;
            color: var(--black);
            margin-top: 20px;
        }

        &-text {
            font-size: 16px;
            font-weight: 400;
            color: var(--black);
            margin-top: 10px;
            opacity: 0.4;
            text-align: center;
        }

        &-btn {
            position: relative;
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            background: var(--bg-green);
            width: 245px;
            padding: 17px 20px 19px 30px;
            margin-top: 40px;
            border: none;
            border-radius: 18px;
            transition: all 0.2s ease;
            cursor: pointer;

            svg {
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translate(0, -55%);
            }

            &:hover {
                opacity: 0.7;
            }
        }
    }

    &__success {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
}
</style>