import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
    state: () => {
        return {
            profileItems: [],
        }
    },
    actions: {
        addProfileItem(order) {
            order.forEach(el => this.profileItems = [...this.profileItems, el]);
        }
    }
})