<script>
import { mapState, mapActions } from 'pinia';
import { useSneakersStore } from '@/store/sneakersStore';
import { useCartStore } from '@/store/cartStore'
import MyWrapper from '@/components/MyWrapper.vue';
import MyItem from '@/components/MyItem.vue';
import MyNoItems from '@/components/MyNoItems.vue';

export default {
    components: {
        MyWrapper,
        MyItem,
        MyNoItems,
    },
    data() {
        return {
            title: 'Мои закладки',
        }
    },
    computed: {
        ...mapState(useSneakersStore, {
            favoritesSneaker: 'favoritesSneaker'
        })
    },
    methods: {
        ...mapActions(useSneakersStore ,{
            addFavorites: 'addFavorites',
        }),
        ...mapActions(useCartStore ,{
            addToCart: 'addToCart',
        })
    }
}
</script>
<template>
    <MyWrapper v-if="favoritesSneaker.length" :title="title">
        <div class="items">
            <MyItem 
                v-for="item in favoritesSneaker" 
                :key="item.id" 
                :item="item"
                @updateCart="addToCart"
                @updateFavorite="addFavorites"
            ></MyItem>
        </div>
    </MyWrapper>
    <div v-else class="block">
        <MyNoItems 
            image="src/assets/images/favorites/none.png" 
            title="Закладок нет :(" 
            text="Вы ничего не добавляли в закладки"
        >
        </MyNoItems>
    </div>
</template>
<style scoped>
.items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
}

.block {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
}
</style>