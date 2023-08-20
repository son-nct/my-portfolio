import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faHome,
    faUser,
    faClipboardCheck,
    faBriefcase,
    faComments,
    faListCheck,
    faArrowUpRightFromSquare
 } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faHome, faUser, faClipboardCheck,faBriefcase,faComments,faListCheck, faGithub, faFacebook,faArrowUpRightFromSquare);

export default FontAwesomeIcon;