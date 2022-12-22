
//import "./wowjs/animate.css";
//import  WOW  from './wowjs/WOW.js';
export default ({ Vue, options, router, siteData }) => {
   Vue.mixin({
       mounted() {
        import('./wowjs/WOW.js').then((m)=> {
            console.log("-----wowjs-----")
            console.log(m);
         })
       },
   })
};
