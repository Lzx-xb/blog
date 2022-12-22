
//import "./wowjs/animate.css";
//import  WOW  from './wowjs/WOW.js';
export default ({ Vue, options, router, siteData }) => {
   Vue.mixin({
       mounted() {
        
        import('./wowjs/WOW.js').then(function (m) {
               Vue.use(m.default)
         })
       },
   })
};
