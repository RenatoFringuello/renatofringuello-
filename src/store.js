import { reactive } from "vue";
//I will remove technologies and projects using an API to get the them from a server
import technologies from '@/json/technologies.json';
import projects from "@/json/projects.json";

const store = reactive({
    getAsset(location, fileName){
        return new URL(`./assets/${location}/${fileName}`, import.meta.url).href;
    },
    getImageSnap(location, imgPath){
        return require(`@/assets/images/${location}/${imgPath}`);
    },
    technologies,
    projects,
});

export {store};