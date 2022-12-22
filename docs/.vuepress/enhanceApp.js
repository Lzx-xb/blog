
import "wowjs/css/libs/animate.css";
import  WOW  from './wowjs/WOW.js';
export default ({ Vue, options, router, siteData }) => {
   Vue.mixin({
       mounted() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 40,
            mobile: true,
            live: true,
        })
        wow.init()
        //    import('./wowjs/WOW.js').then(function (m) {
        //        Vue.use(m.default)
        //    })
       },
   })
};