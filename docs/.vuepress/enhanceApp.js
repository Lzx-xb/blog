
//import "./wowjs/animate.css";
//import  WOW  from './wowjs/WOW.js';
export default ({ Vue, options, router, siteData }) => {
   Vue.mixin({
       mounted() {
        import('./wowjs/WOW.js').then((WOW)=> {
            console.log("-----wowjs-----")
            console.log(WOW);
            const wow = WOW.default;
            console.log(wow);
            wow.init();
            
         })
       },
   })
};
