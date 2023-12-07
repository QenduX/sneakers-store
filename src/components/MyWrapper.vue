<script>
export default {
    props: {
        title: String,
    }
}
</script>
<template>
    <div class="wrapper">
        <div class="top">
            <router-link to="/" class="link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 16L10 12L14 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <div class="title">{{ title }}</div>
        </div>
        <div class="block">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
.wrapper {
    margin-top: 40px;
    padding: 0 60px 60px 60px;
}

.top {
    display: flex;
    align-items: center;
}

.link {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 32px;
    height: 32px;
    margin-right: 20px;
    border-radius: 8px;
    border: 1px solid var(--text-gray-light);
    cursor: pointer;
    transition: all 0.2s ease;

    path {
        transition: all 0.2s ease;
        stroke: var(--text-gray-light);
    }

    &:hover {
        border: 1px solid var(--text-gray-dark);

        path {
            stroke: var(--text-gray-dark);
        }
    }
}

.title {
    font-size: 32px;
    font-weight: 700;
    color: var(--black);
}

.block {
    margin-top: 40px;
}
</style>
