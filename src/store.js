import { reactive } from "vue";

const store = reactive({
    getAsset(location, fileName){
        return new URL(`./assets/${location}/${fileName}`, import.meta.url).href;
    }
});

export {store};