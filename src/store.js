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
    getTechs(techsToFind){
        return store.technologies.filter(tech => techsToFind.includes(tech.name));
    },
    getSlug(stringToSlug){
        return stringToSlug.toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    },
    technologies,
    projects,
});

export {store};