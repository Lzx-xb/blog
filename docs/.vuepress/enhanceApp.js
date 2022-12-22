
import "wowjs/css/libs/animate.css";

export default ({ Vue, options, router, siteData }) => {
   Vue.mixin({
       mounted() {
           import('wowjs').then(function (m) {
               Vue.use(m.default)
           })
       },
   })
};