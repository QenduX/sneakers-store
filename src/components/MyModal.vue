<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onHideModal() {
            this.$emit('update:showModal', false)
        }
    }
}
</script>
<template>
    <div class="modal" :class="showModal ? 'active' : ''" @click.stop="onHideModal">
        <div class="modal__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background: rgba(#000000,0.5);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;

    &.active {
        opacity: 1;
        pointer-events: all;
    }

    &__content {
        display: flex;
        height: 100%;
        width: fit-content;
        margin-left: auto;
    }
}
</style>