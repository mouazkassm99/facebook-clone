import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


//right side
import { faBell, faCommentDots, faArrowDown, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faBell, faCommentDots, faArrowDown, faPlus, faUser)

//middel
import { faHouseUser, faTv, faUserFriends, faDiceSix } from '@fortawesome/free-solid-svg-icons'
library.add(faHouseUser, faTv, faUserFriends, faDiceSix)

//left side
import { faSearch , faShieldVirus, faUsers, faVideo, faThumbsUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faShieldVirus, faUsers, faVideo, faThumbsUp, faCaretDown)

Vue.component('fa-icon', FontAwesomeIcon)