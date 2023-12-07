<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useSneakersStore } from '@/store/sneakersStore'
import { useCartStore } from '@/store/cartStore'
import MyItem from '@/components/MyItem.vue';
import MySlider from '@/components/MySlider.vue';
import MyInput from '@/components/UI/MyInput.vue';

export default {
    components: { MySlider, MyItem, MyInput },
    computed: {
        ...mapState(useSneakersStore, {
            sneakersItems: 'sneakers',
            getSearchSneakers: 'getSearchSneakers',
        }),
        ...mapWritableState(useSneakersStore, {
            searchQuery: 'searchQuery',
        })
    },
    methods: {
        ...mapActions(useSneakersStore, {
            addFavorites: 'addFavorites',
        }),
        ...mapActions(useCartStore, {
            addToCart: 'addToCart',
        }),
    },
}
</script>
<template>
    <div class="main">
        <MySlider class="main__slider"></MySlider>
        <div class="main__block">
            <p class="main__title">Все кроссовки</p>
            <MyInput v-model="searchQuery"></MyInput>
        </div>
        <div class="main__items">
            <MyItem 
                v-for="item in getSearchSneakers" 
                :key="item.id" 
                :item="item"
                @updateCart="addToCart"
                @updateFavorite="addFavorites"
            ></MyItem>
        </div>
    </div>
</template>
<style scoped lang="scss"> 
.main {
    padding: 0 60px 60px 60px;
    
    &__slider {
        margin-top: 45px;
    }

    &__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
    }

    &__title {
        font-size: 32px;
        font-weight: 700;
        color: car(---black);
    }
    
    &__items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
        margin-top: 40px;
    }
}
</style>