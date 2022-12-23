
import "./wowjs/animate.css";
export default ({ Vue, options, router, siteData }) => {
   Vue.mixin({
       mounted() {
        import('./wowjs/WOW.js').then((m)=> {
            const wow = new m.default;
            wow.init();
            
         })
       },
   })
};
