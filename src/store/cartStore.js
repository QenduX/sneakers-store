import { defineStore } from 'pinia';
import { useSneakersStore } from './sneakersStore'
import { useProfileStore } from './profileStore'

const BASE_URL = 'http://localhost:3000'

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cartState: 'clear',
            cart: [],
            countOrder: 0,
        }
    },
    getters: {
        countCost: (state) => state.cart.reduce((acc, item) => acc + item.cost , 0),
        taxCost: (state) => Math.floor(state.cart.reduce((acc, item) => acc + item.cost , 0) / 100 * 13),
    },
    actions: {
        addToCart(item) {
            const sneakersStore = useSneakersStore();

            if (!this.cart.find(el => el.id === item.id)) {
                this.cart.push(item);
                this.cartState = 'cart';

                sneakersStore.toggleFavorites(item.id);
            }
        },
        removeFromCart(id) {
            const sneakersStore = useSneakersStore();

            this.cart = this.cart.filter(item => item.id != id);
            sneakersStore.toggleFavorites(id);

            if (this.cart.length === 0) {
                this.cartState = 'clear'; 
            }
        },
        acceptOrder() {
            const profileStore = useProfileStore();
            const sneakersStore = useSneakersStore();

            profileStore.addProfileItem(this.cart);
            sneakersStore.toggleFavorites();

            this.cart.length = 0;
            this.countOrder += 1;
            this.cartState = 'success'; 
        },
        clearState() {
            this.cartState = 'clear'; 
        }
    },
})