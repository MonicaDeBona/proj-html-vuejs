import { reactive } from 'vue'
export const store = reactive({
    getImagePath: function (img) {
        return new URL(`./assets/imgs/${img}`, import.meta.url).href;
    }
})