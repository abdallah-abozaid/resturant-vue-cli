import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog,faStar,faHome,faBriefcase,faCogs,faCamera,faGlobeAmericas,faPhoneAlt,faStreetView,faLongArrowAltDown,faQuoteLeft,faChevronLeft,faChevronRight,faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane,faFacebookF,faTwitter,faGooglePlusG,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCog,faStar,faHome,faBriefcase,faCogs,faCamera,faGlobeAmericas,faTelegramPlane,faPhoneAlt,faStreetView,faCommentDots,faLongArrowAltDown,faQuoteLeft,faChevronLeft,faChevronRight,faFacebookF,faTwitter,faGooglePlusG,faInstagram)






let app=createApp(App);
app.use(store);
app.use(router);
app.component('fa-icon', FontAwesomeIcon);
app.mount("#app");

