<script>
export default {
    props: {
        modelValue: [String, Number], 
    },
    methods: {
        search(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<template>
    <label class="label">
        <svg class="label__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <input @input.trim="search" :value="modelValue" type="text" class="label__input" placeholder="Поиск...">
    </label>
</template>
<style scoped lang="scss">
.label {
        position: relative;
        padding: 15px 18px 15px 46px;
        border-radius: 10px;
        border: 1px solid #F3F3F3;

        &__icon {
            position: absolute;
            left: 18px;
            top: 50%;
            width: 15px;
            height: 15px;
            transform: translate(0, -50%);
        }

        &__input {
            border: none;
            font-size: 14px;
            font-weight: 400;
            color: var(--black);

            &::placeholder {
                font-size: 14px;
                font-weight: 400;
                color: var(--text-gray-light);
                user-select: none;
            }

            &:focus, &:active, &:focus-visible {
                border: none;
                outline: none;
            }
        }
    }
</style>