<script>
export default {
    props: {
        image: String,
        title: String,
        text: String,
    }
}
</script>
<template>
    <div  class="none">
        <img class="none__img" :src= "image" alt="">
        <p class="none__title">{{ title }}</p>
        <p class="none__text">{{ text }}</p>
        <router-link to="/" class="none__link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Вернуться назад
        </router-link>
    </div>
</template>
<style scoped lang="scss">
.none {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__img {
        width: 70px;
        height: 70px;
        object-fit: cover;
    }

    &__title {
        font-size: 24px;
        font-weight: 600;
        color: var(--black);
        margin-top: 31px;
    }

    &__text {
        font-size: 16px;
        font-weight: 400;
        color: var(--black);
        line-height: 24px;
        text-align: center;
        max-width: 280px;
        margin-top: 11px;
        opacity: 0.4;
    }

    &__link {
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
</style>