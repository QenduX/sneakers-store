<script>
import MyHeader from '@/components/MyHeader.vue';
import MyCart from '@/components/MyCart.vue';
import MyModal from '@/components/MyModal.vue';

export default {
    components: { MyHeader, MyCart, MyModal },
    data() {
      return {
        showModal: false,
      }
    },
}
</script>

<template>
  <div class="container">
    <MyHeader v-model:showModal="showModal"></MyHeader>
    <router-view></router-view>
    <MyModal v-model:showModal="showModal">
        <MyCart v-model:showModal="showModal"></MyCart>
    </MyModal>
  </div>
</template>

<style scoped>
</style>
