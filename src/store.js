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

    /**
         * catch the keywords from the content and return specialContent based on the keywords
         * use _key[link, title]
         * (keys: _link, _flag)
         * example: _flag[https://flagsapi.com/XX/flat/64.png,IT] => title (IT) will replace XX
         * @param {String} content 
         * @returns - the content as html element
         */
    getContent(content){
        //catch the escape content
        if(content.includes('_flag') || content.includes('_link')){
            //verify them all
            const types = ['_flag', '_link']
            types.forEach((type)=>{
                content = this.getEscape(type, content)
            })
        }

        return content
    },
    /**
     * it detect escapes custom tag like [_flag | _link] and generate an HTML element with the data inside the square brakets
     * 
     * es(i want a itallian flag)
     * _flag[https://flagsapi.com/XX/flat/64.png,IT] 'XX' will be replaced by 'IT'
     * @param {String} type - [_flag | _link]
     * @param {String} content - a string with some escapes (or not)
     * @returns - the html element 
     */
    getEscape(type, content){
        let specialContent = '';
        //to match everything that start with _<type>[*] where type => [_flag | _link]
        let regex = new RegExp(`${type}\\[(.*?)\\]`)

        //split escaped content by non escaped content
        content.split(regex)
            .forEach((str)=> {
                //if don't match a _<type> AND a img src AND str contains 'http'
                if((!str.match(/_(.*?)\[(.*?)\]/) && !str.match(/src="(.*?)"/)) && str.includes('http')) {
                    // extract data 
                    let data = str.split(',')
                    //create a img | link a
                    str = (type == '_flag')
                        ? `<img class="flag" src="${data[0].replace('XX',data[1])}" alt="${data[1]} Flag">`
                        : `<a class="link link-blank" href="${data[0]}" target="_blank">${data[1]}</a>`
                }
                //concatenate all content matched and not matched
                specialContent += str
            });

        //return the result
        return specialContent
    },

    technologies,
    projects,
});

export {store};