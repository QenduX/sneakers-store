import { defineStore } from 'pinia'

const BASE_URL = 'http://localhost:3000'

export const useSneakersStore = defineStore('sneakers', {
    state: () => {
        return { 
            sneakers: [
                {id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', cost: 12999, image: 'src/assets/images/sneakers/sneaker1.png', isFavorites: false, inCart: false},
                {id: 2, title: 'Мужские Кроссовки Nike Air Max 270', cost: 12999, image: 'src/assets/images/sneakers/sneaker2.png', isFavorites: false, inCart: false},
                {id: 3, title: 'Мужские Кроссовки Nike Blazer Mid Suede', cost: 8499, image: 'src/assets/images/sneakers/sneaker3.png', isFavorites: false, inCart: false},
                {id: 4, title: 'Кроссовки Puma X Aka Boku Future Rider', cost: 8999, image: 'src/assets/images/sneakers/sneaker4.png', isFavorites: false, inCart: false},
                {id: 5, title: 'Мужские Кроссовки Under Armour Curry 8', cost: 15199, image: 'src/assets/images/sneakers/sneaker5.png', isFavorites: false, inCart: false},
                {id: 6, title: 'Мужские Кроссовки Nike Kyrie 7', cost: 11299, image: 'src/assets/images/sneakers/sneaker6.png', isFavorites: false, inCart: false},
                {id: 7, title: 'Мужские Кроссовки Jordan Air Jordan 11', cost: 10799, image: 'src/assets/images/sneakers/sneaker7.png', isFavorites: false, inCart: false},
                {id: 8, title: 'Мужские Кроссовки Nike LeBron XVIII', cost: 16499, image: 'src/assets/images/sneakers/sneaker8.png', isFavorites: false, inCart: false},
                {id: 9, title: 'Мужские Кроссовки Nike Lebron XVIII Low', cost: 13999, image: 'src/assets/images/sneakers/sneaker9.png', isFavorites: false, inCart: false},
                {id: 10, title: 'Мужские Кроссовки Nike Blazer Mid Suede', cost: 8499, image: 'src/assets/images/sneakers/sneaker1.png', isFavorites: false, inCart: false},
                {id: 11, title: 'Кроссовки Puma X Aka Boku Future Rider', cost: 8999, image: 'src/assets/images/sneakers/sneaker2.png', isFavorites: false, inCart: false},
                {id: 12, title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', cost: 11299, image: 'src/assets/images/sneakers/sneaker10.png', isFavorites: false, inCart: false},
            ],
            searchQuery: ''
        }
    },
    getters: {
        favoritesSneaker(state) {
            return state.sneakers.filter(item => item.isFavorites === true)
        },
        getSearchSneakers(state) {
            return state.sneakers.filter(item => item.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    actions: {
        addFavorites(id) {
            this.sneakers.filter((item) => {
                return item.id === id ? item.isFavorites = !item.isFavorites : item.isFavorites = item.isFavorites
            });
        },
        toggleFavorites(id) {
            if (id) {
                this.sneakers.filter(el => el.id === id ? el.inCart = !el.inCart : el.inCart);
            }
            else {
                this.sneakers.forEach(el => el.inCart = false);
            }
        },
    },
})