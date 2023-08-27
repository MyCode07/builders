import './parts/menu.js'
import './parts/sliders.js'
import './parts/gallery.js'
import { stickyHeader } from './parts/header.js'
import { toTop } from './static/to-top.js'
import { animateImages } from './parts/image-aniamtions.js'
import { notice } from './parts/notice.js'
import { replaceDomElements } from './static/replace.js'

replaceDomElements()
stickyHeader() 
toTop()
animateImages()
notice();