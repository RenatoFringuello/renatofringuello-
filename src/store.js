import { reactive } from "vue";
//I will remove technologies and projects using an API to get the them from a server
import technologies from '@/json/technologies.json';
import projects from "@/json/projects.json";

const store = reactive({
    /**
     * get the src value of the image to find in "src/assets/images"
     * @param {String} location the path to the folder of the image to get
     * @param {String} imgName the imageName
     * @returns src
     */
    getImageSnap(imgName, location = ""){
        return require(`@/assets/images/${location}${imgName}`);
    },
    /**
     * search the technologies requested in the technologies array by their name
     * @param {Array} techsToFind 
     * @returns {Array} - techs found
     */
    getTechs(techsToFind){
        return store.technologies.filter(tech => techsToFind.includes(tech.name));
    },
    /**
     * cast a alphanumeric string into a slug
     * @param {String} stringToSlug 
     * @returns {String} - slugged stringToSlug
     */
    getSlug(stringToSlug){
        return stringToSlug.toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    },
    /**
     * scroll to the carousel when is called
     * @param {String} carouselId - is the carousel id name
     */
    goToCarousel(carouselId){
        const carousel = document.getElementById(carouselId);
        carousel.scrollIntoView();
        carousel.childNodes[0].scrollTo(0,0);//reset to first slide 
    },
    technologies,
    projects,
});

export {store};