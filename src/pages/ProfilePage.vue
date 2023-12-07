<script>
import { mapState, mapActions } from 'pinia';
import { useProfileStore } from '@/store/profileStore';
import { useSneakersStore } from '@/store/sneakersStore'
import { useCartStore } from '@/store/cartStore'

import MyWrapper from '@/components/MyWrapper.vue';
import MyItem from '@/components/MyItem.vue';
import MyNoItems from '@/components/MyNoItems.vue';

export default {
    components: {
    MyWrapper,
    MyItem,
    MyNoItems
},
    data() {
        return {
            title: 'Мои покупки',
        }
    },
    computed: {
        ...mapState(useProfileStore, {
            profileItems: 'profileItems',
        })
    },
    methods: {
        ...mapActions(useSneakersStore ,{
            addFavorites: 'addFavorites',
        }),
        ...mapActions(useCartStore, {
            addToCart: 'addToCart',
        }),
    }
}
</script>
<template>
    <MyWrapper v-if="profileItems.length" :title="title">
        <div class="items">
            <MyItem 
                v-for="item in profileItems" 
                :key="item.title" 
                :item="item"
                @updateCart="addToCart"
                @updateFavorite="addFavorites"
            ></MyItem>
        </div>
    </MyWrapper>
    <div v-else class="block">
        <MyNoItems 
            image="src/assets/images/profile/none.png" 
            title="У вас нет заказов" 
            text="Оформите хотя бы один заказ."
        >
        </MyNoItems>
    </div>
</template>
<style scoped lang="scss">
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