<script>
export default {
    props: {
        item: Object,
    },
    methods: {
        removeItem(id) {
            this.$emit('remove', id)
        }
    }
}
</script>
<template>
    <div class="item">
        <img class="item__img" :src="item.image" alt="">
        <div class="item__block">
            <p class="item__title">{{ item.title }}</p>
            <p class="item__cost">{{ item.cost }} руб.</p>
        </div>
        <button class="item__btn" @click="removeItem(item.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 1L9 5M7 7L1 13M7 7L1 1M7 7L13 13" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</template>
<style scoped lang="scss">
.item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px 40px 20px 20px;
    border-radius: 20px;
    border: 1px solid #F3F3F3;

    &__img {
        width: 80px;
        height: 70px;
        object-fit: cover;
    }

    &__block {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
    }

    &__title {
        font-size: 14px;
        font-weight: 400;
        color: var(--black);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    &__cost {
        font-size: 14px;
        font-weight: 700;
        color: var(--black);
        margin-top: 8px;
    }

    &__btn {
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        border: 1px solid var(--text-gray-light);
        cursor: pointer;
        transition: all 0.2s ease;

        path {
            transition: all 0.2s ease;
        }

        &:hover {
            border: 1px solid var(--text-gray-dark);

            path {
                stroke: var(--text-gray-dark);
            }
        }
    }
}

</style>