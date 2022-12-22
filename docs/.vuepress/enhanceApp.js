
import "./wowjs/animate.css";
//import  WOW  from './wowjs/WOW.js';
export default ({ Vue, options, router, siteData }) => {
   Vue.mixin({
       mounted() {
        import('./wowjs/WOW.js').then((m)=> {
            // console.log(WOW);
            const wow = new m.default;
            // console.log(wow);
            wow.init();
            
         })
       },
   })
};
