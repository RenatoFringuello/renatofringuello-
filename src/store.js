import { reactive } from "vue";

const store = reactive({
    getAsset(location, fileName){
        return new URL(`./assets/${location}/${fileName}`, import.meta.url).href;
    },
    getImageSnap(location, imgPath){
        return require(`@/assets/images/${location}/${imgPath}`);
    }
});

export {store};