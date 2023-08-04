import VueScrollTo from "vue-scrollto";
import CONFIG from '../../../global-config.ts'

export function useScrollToElement() {
    const scrollToElement = () => {
        const navigationList = ['home','about','project','work','contact']
        const router = useRouter()
        const currentRoute = router.currentRoute.value.fullPath
        const currentSection = currentRoute.slice(1,currentRoute.length)
      
        if(navigationList.includes(currentSection)) {
          VueScrollTo.scrollTo('#'+ currentSection, CONFIG.VUE_SCROLL_CONFIG_OPTION)
        }
    }

    return {
      scrollToElement
    }
}